<?php
class authenticator
{

    // Change admin password on a regularly scheduled basis for security purposes
    private $adminUsername = 'sae_phpScripts';
    private $adminPassword = 'HmmW13fLpM1U';

    public function __constuct()
    { }

    function forTesting()
    {
        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'sae_database');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Check if username exists
        $checkExistsString = sprintf("select * from users");
        $checkExists = $adminConnection->prepare($checkExistsString);
        if (!$checkExists) {
            printf("Query Prep Failed: %s\n", $checkExists->error);
            exit;
        }
        $checkExists->execute();
        $checkExists->bind_result($exists);
        $checkExists->fetch();

        return $exists;
    }

    function usernameExists($username)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'sae_database');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Check if username exists
        $checkExistsString = sprintf("select username from users where username='%s'", $username);
        $checkExists = $adminConnection->prepare($checkExistsString);
        if (!$checkExists) {
            printf("Query Prep Failed: %s\n", $checkExists->error);
            exit;
        }
        $checkExists->execute();
        $checkExists->bind_result($exists);
        $checkExists->fetch();

        $adminConnection->close();

        if ($exists) {
            return true;
        } else {
            return false;
        }
    }

    function verifyPassword($username, $password)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'newsFeed');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        $getPassHashQuery = sprintf("select password from users where username='%s'", $username);
        $getPassHash = $adminConnection->prepare($getPassHashQuery);
        if (!$getPassHash) {
            printf("Query Prep Failed: %s\n", $getPassHash->error);
            exit;
        }
        $getPassHash->execute();
        $getPassHash->bind_result($passHash);
        $getPassHash->fetch();

        $adminConnection->close();

        $verified = password_verify($password, $passHash);
        if ($verified) {
            return true;
        } else {
            return false;
        }
    }

    function makeUser($username, $password, $email)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'newsFeed');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Create a MySQL account for the new user
        $makeUserString = sprintf("create user '%s'@'localhost' identified by '%s'", $username, $password);
        $makeUser = $adminConnection->prepare($makeUserString);
        if (!$makeUser) {
            printf("Query Prep Failed: %s\n", $makeUser->error);
            exit;
        }
        $makeUser->execute();

        // Grant the user privileges to modify information on the site
        $grantPrivilegesString = sprintf("grant select, insert, update, delete on newsFeed.* to %s@'localhost'", $username);
        $grantPrivileges = $adminConnection->prepare($grantPrivilegesString);
        if (!$grantPrivileges) {
            printf("Query Prep Failed: %s\n", $grantPrivileges->error);
            exit;
        }
        $grantPrivileges->execute();

        // Add user's info the the users database (separated into email/no-email cases)
        if ($email != NULL) {
            $email = htmlentities($_POST["email"]);
            $addUserString = sprintf(
                "insert into users (username, password, email) values ('%s', '%s', '%s')",
                $username,
                password_hash($password, PASSWORD_DEFAULT),
                $email
            );
            $addUser = $adminConnection->prepare($addUserString);
        } else {
            $addUserString = sprintf(
                "insert into users (username, password) values ('%s', '%s')",
                $username,
                password_hash($password, PASSWORD_DEFAULT)
            );
            $addUser = $adminConnection->prepare($addUserString);
        }
        if (!$addUser) {
            printf("Query Prep Failed: %s\n", $addUser->error);
            exit;
        }
        $addUser->execute();


        $adminConnection->close();
    }

    function loginSuccess($username, $password)
    {
        session_start();
        $_SESSION["token"] = bin2hex(openssl_random_pseudo_bytes(32));
        $_SESSION["username"] = $username;
        $_SESSION["password"] = $password;

        $returningUserConnection = new mysqli('localhost', $username, $password, 'newsFeed');
        if ($returningUserConnection->connect_errno) {
            printf("Connection Failed: %s\n", $returningUserConnection->error);
            exit;
        }
        // Figure this out if time
        // $_SESSION["con"] = $returningUserConnection;

        header("Location: returningUserHome.php");
        exit;
    }
}
