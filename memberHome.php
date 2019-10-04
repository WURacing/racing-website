<?php
if (!isset($_SESSION['nID']))
{
    header("Location: login.php");
    die();
}
?>

<html>
    <head>

    </head>
    <body>
        <h1>Congrats you logged in</h1>
    </body>
</html>