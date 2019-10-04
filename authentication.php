<?php

session_start();
include 'authenticator.php';

if (isset($_POST["email"]) and isset($_POST["password"])) {
    $email = htmlentities($_POST["email"]);
    $password = htmlentities($_POST["password"]);

    $auth = new authenticator();
    if ($auth->emailAuthorized($email) and $auth->verifyPassword($email, $password)) {
        $auth->loginSuccess($email, $password);
        exit;
    } else {
        echo "<p>Incorrect Email or Password</p>";
    }
}
?>