<?php

session_start();
require '../../../inc/dbc.php';

$email = $_POST['email'];
$password = $_POST['password'];
$iogv = $_POST['iogv'];
$login = $_POST['login'];
$utype = $_POST['utype'];
$active = (isset($_POST['active'])) ? "true" : "false";

$request = "INSERT INTO users(login,password,email,enabled,org,ulevel) VALUES('$login',MD5('$password'),'$email','$active',$iogv,$utype)";

if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false,err:" . mysql_error() . "}";
}
?>