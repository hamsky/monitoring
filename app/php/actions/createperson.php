<?php

session_start();
require '../../../inc/dbc.php';

$org = $_SESSION['iogv'];
$initials = $_POST['initials'];

$request = "INSERT INTO persons(org,initials,date_,email,phone,skype) VALUES($org,'$initials','','','','')";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>
