<?php

session_start();

require '../../../inc/dbc.php';

$servicename = $_POST['servicename'];
$request = "INSERT INTO services(service) VALUES('$servicename')";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false,err:" . mysql_error() . "}";
}
?>