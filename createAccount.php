<?php
session_start();
include 'authenticator.php';
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" href="assets/images/logo-128x42.png" type="image/x-icon">
    <meta name="description" content="WashU Racing, FSAE Team">

    <title>WashU Racing</title>
    <link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">
    <link rel="stylesheet" href="assets/tether/tether.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="assets/socicon/css/styles.css">
    <link rel="stylesheet" href="assets/theme/css/style.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/custom/css/navbar.css">
    <link rel="stylesheet" href="assets/custom/css/login.css">
</head>

<body>
    <div id="nav">
        <a class="img-fluid" href="index.html">
            <img id="logoText" src="assets/images/logoText-white.png" alt="Wash U Racing Logo Text">
        </a>
        <div class="links">
            <a href="index.html">About</a>
            <a href="gallery.html">Gallery</a>
            <a href="historyPage/history.html">History</a>
            <a href="underConstruction.html">Members</a>
            <a href="sponsors.html">Sponsors</a>
            <a href="login.php">Team Login</a>
        </div>
        <div class="dropdown-links">
            <div id="hidden-links">
                <a href="index.html">About</a>
                <a href="gallery.html">Gallery</a>
                <a href="historyPage/history.html">History</a>
                <a href="underConstruction.html">Members</a>
                <a href="sponsors.html">Sponsors</a>
                <a href="login.php">Team Login</a>
            </div>
            <i id="hamburger" class="fas fa-bars"></i>
        </div>
    </div>


    <div class="background">
        <img class="" src="assets/images/both-cars-closeup.jpg" alt="">
    </div>

    <div class="create-content">
        <form class="login" action="memberHome.php" method="POST">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter full name">
            </div>
            <div class="form-group">
                <label for="wustlEmail">Email</label>
                <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="password">Confirm Password</label>
                <input type="password" name="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm Password">
            </div>
            <button id="subBtn" type="submit" class="btn btn-primary">Create Account</button>
        </form>
    </div>

    <?php
        if (isset($_POST["email"]) and isset($_POST["password"]) and isset($_POST["confirmPassword"]) and isset($_POST["name"])) {

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

    <script src="assets/web/assets/jquery/jquery.min.js"></script>
    <script src="assets/popper/popper.min.js"></script>
    <script src="assets/tether/tether.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/smoothscroll/smooth-scroll.js"></script>
    <script src="assets/parallax/jarallax.min.js"></script>
    <script src="assets/countdown/jquery.countdown.min.js"></script>
    <script src="assets/theme/js/script.js"></script>
    <script src="assets/custom/js/navbar.js"></script>

</body>

</html>