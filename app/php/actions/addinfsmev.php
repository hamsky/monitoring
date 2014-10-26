<?php

session_start();
require '../../../inc/dbc.php';
$inf = $_POST['inf'];
$foiv = $_POST['foiv'];
$category = $_POST['category'];
$rejim = $_POST['rejim'];
$org = $_SESSION['iogv'];

$request = "INSERT INTO smev(name,foiv,category,type_,org) VALUES($inf,$foiv,$category,$rejim,$org)";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>
