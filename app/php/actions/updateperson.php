<?php

session_start();
require '../../../inc/dbc.php';


$id = $_POST['id'];
$date_ = $_POST['date_'];
$email = $_POST['email'];
$initials = $_POST['initials'];
$phone = $_POST['phone'];
$skype = $_POST['skype'];



$query ="UPDATE persons SET date_ ='$date_', email='$email', initials='$initials', phone= '$phone',skype='$skype' WHERE id=$id";

echo $query;

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}


?>

