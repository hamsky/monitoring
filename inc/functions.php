<?php

session_start();
require '../app/php/db/dbc.php';
$action = $_POST['action'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$iogv = $_POST['iogvs'];
$id = $_SESSION['uid'];

switch ($action) {
    case'logout':
        logout();
        echo "{success:true}";
        break;
    case'registration':
        $request = "INSERT INTO users( login,password, email,org,ulevel) VALUES('$username',MD5('$password'),'$email','$iogv',2)";
        if (mysql_query($request)) {
            echo "{success:true}";
        } else {
            echo "{success:false}";
        }
        break;
}

function checkLoggedIn() {
    if (!isset($_SESSION["loggedIn"])) {
        header("Location: login.php");
        exit();
    } else if (isset($_SESSION["loggedIn"]) && $_SESSION["loggedIn"] === true) {
        header("Location: index.php");
        exit();
    }
}

function logout() {
    unset($_SESSION["loggedIn"]);
    unset($_SESSION['uname']);
    unset($_SESSION['utype']);
}

?>
