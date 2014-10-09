<?php

session_start();

require '../../../inc/dbc.php';

$login = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];
$uid = $_SESSION['uid'];

$query = "UPDATE users SET login ='$login', email='$email'";

if (strlen($password) > 0) {
    $query = $query . ", password =MD5('$password')";
}

$query = $query . " WHERE id = $uid";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>

