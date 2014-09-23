<?php

session_start();
require '../../../inc/dbc.php';

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$iogv = $_POST['iogvs'];

$request = "INSERT INTO users( login,password, email,org,ulevel) VALUES('$username',MD5('$password'),'$email','$iogv',2)";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false}";
}
?>
