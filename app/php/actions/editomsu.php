<?php

session_start();
require '../../../inc/dbc.php';
$iogv = $_POST['iogv'];
$manage = $_POST['manage'];
$id = $_POST['id'];
$type = $_POST['type'];

$query = "UPDATE iogv SET iogv ='$iogv' , manage ='$manage', type ='$type' WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>