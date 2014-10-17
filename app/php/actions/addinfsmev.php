<?php

session_start();
require '../../../inc/dbc.php';
$inf = $_POST['inf'];
$foiv = $_POST['foiv'];
$category = $_POST['category'];
$rejim = $_POST['rejim'];


$request = "INSERT INTO smev(name,foiv,category,type_) VALUES($inf,$foiv,$category,$rejim)";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>
