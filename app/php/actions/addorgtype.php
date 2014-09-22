<?php

session_start();
require '../../../inc/dbc.php';
$type = $_POST['vtype'];

$request = "INSERT INTO org_type(name) VALUES('$type')";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>

