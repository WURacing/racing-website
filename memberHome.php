<?php
if (!isset($_SESSION['nID']))
{
    header("Location: login.html");
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