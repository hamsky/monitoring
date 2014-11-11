<?php
session_start();
require '../../../inc/dbc.php';
$info = $_POST['persons'];
$data = json_decode(stripslashes($info));
$id = $data[0]->id;
var_dump($_POST);
$query = "DELETE FROM persons WHERE id=$id";
echo $info;
if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false,err:" . mysql_error() . "}";
}

?>