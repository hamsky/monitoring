<?php

session_start();
require '../../../inc/dbc.php';
$info = $_POST['orglist'];
$data = json_decode(stripslashes($info));
$id = $data[0]->id;
$query = "DELETE FROM iogv WHERE id=$id";
if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false,err:" . mysql_error() . "}";
}
?>