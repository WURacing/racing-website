<?php
include 'authenticator.php';

session_start();

if (count($_POST) == 4) {

    $email = htmlentities($_POST["email"]);
    $name = htmlentities($_POST["name"]);
    $password = htmlentities($_POST["password"]);
    $confPass = htmlentities($_POST["confirmPassword"]);

    // Check that password and confirmPassword are the same
    if (password_verify($password, password_hash($confPass, PASSWORD_DEFAULT))) {

        $auth = new authenticator();
        if ($auth->emailExists($email)) {
            echo "Email has already been used on account";
            exit;
        } else {
            $auth->makeUser($email, $password, $name);
            $auth->loginSuccess($email, $password);
            exit;
        }
    } else {
        echo "<h1>Error: passwords did not match</h1>";
    }
}
?>