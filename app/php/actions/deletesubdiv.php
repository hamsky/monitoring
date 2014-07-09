<?php

session_start();
require '../db/dbc.php';
$info = $_POST['subdivisions'];
$data = json_decode(stripslashes($info));
$id = $data[0]->id;
$query = "DELETE FROM orgsubdiv WHERE id=$id";
if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false,err:" . mysql_error() . "}";
}

?>