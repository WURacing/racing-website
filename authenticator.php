<?php
class authenticator
{

    // Change admin password on a regularly scheduled basis for security purposes
    private $adminUsername = 'sae_phpScripts';
    private $adminPassword = 'HmmW13fLpM1U';

    public function __constuct()
    { }

    function emailAuthorized($email)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'sae_database');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Check if email is authorized
        $checkEmailAuthQuery = sprintf("select emailAuthorized from users where email='%s'", $email);
        $checkEmailAuth = $adminConnection->prepare($checkEmailAuthQuery);
        if (!$checkEmailAuth) {
            printf("Query Prep Failed: %s\n", $checkEmailAuth->error);
            exit;
        }
        $checkEmailAuth->execute();
        $checkEmailAuth->bind_result($authed);
        $checkEmailAuth->fetch();

        $adminConnection->close();

        if ($authed) {
            return true;
        } else {
            return false;
        }
    }

    function emailExists($email)
    {
        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'sae_database');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Check if email is authorized
        $checkEmailAuthQuery = sprintf("select email from users where email='%s'", $email);
        $checkEmailAuth = $adminConnection->prepare($checkEmailAuthQuery);
        if (!$checkEmailAuth) {
            printf("Query Prep Failed: %s\n", $checkEmailAuth->error);
            exit;
        }
        $checkEmailAuth->execute();
        $checkEmailAuth->bind_result($authed);
        $checkEmailAuth->fetch();

        $adminConnection->close();

        if ($authed) {
            return true;
        } else {
            return false;
        }
    }

    function verifyPassword($email, $password)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'newsFeed');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        $getPassHashQuery = sprintf("select password from users where email='%s'", $email);
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

    function makeUser($email, $password, $name)
    {

        $adminConnection = new mysqli('localhost', $this->adminUsername, $this->adminPassword, 'sae_database');
        if ($adminConnection->connect_errno) {
            printf("Connection Failed: %s\n", $adminConnection->error);
            exit;
        }

        // Create a MySQL account for the new user
        $makeUserString = sprintf("create user '%s'@'localhost' identified by '%s'", $email, $password);
        $makeUser = $adminConnection->prepare($makeUserString);
        if (!$makeUser) {
            printf("Query Prep Failed: %s\n", $makeUser->error);
            exit;
        }
        $makeUser->execute();

        // Grant the user privileges to modify information on the site
        $grantPrivilegesString = sprintf("grant select, insert, update, delete on newsFeed.* to %s@'localhost'", $email);
        $grantPrivileges = $adminConnection->prepare($grantPrivilegesString);
        if (!$grantPrivileges) {
            printf("Query Prep Failed: %s\n", $grantPrivileges->error);
            exit;
        }
        $grantPrivileges->execute();

        // Add user's info the the users database (separated into email/no-email cases)

        $email = htmlentities($_POST["email"]);
        $addUserString = sprintf(
            "insert into users (email, password, fullName) values ('%s', '%s', '%s')",
            $email,
            password_hash($password, PASSWORD_DEFAULT),
            $name
        );
        $addUser = $adminConnection->prepare($addUserString);

        if (!$addUser) {
            printf("Query Prep Failed: %s\n", $addUser->error);
            exit;
        }
        $addUser->execute();


        $adminConnection->close();
    }

    function loginSuccess($email, $password)
    {
        session_start();
        $_SESSION["token"] = bin2hex(openssl_random_pseudo_bytes(32));
        $_SESSION["email"] = $email;
        $_SESSION["password"] = $password;

        $returningUserConnection = new mysqli('localhost', $email, $password, 'sae_database');
        if ($returningUserConnection->connect_errno) {
            printf("Connection Failed: %s\n", $returningUserConnection->error);
            exit;
        }

        // Figure this out if time
        // $_SESSION["con"] = $returningUserConnection;

        header("Location: memberHome.php");
        exit;
    }
}
