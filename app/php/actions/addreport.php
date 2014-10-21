<?php

session_start();
require '../../../inc/dbc.php';
$service = $_POST['serv'];
$date = $_POST['date'];
$value = $_POST['val'];
$iogv = $_SESSION['iogv'];
$jval = $_POST['jval'];
$jst = $_POST['jst'];
$timestamp = date('Y-m-d', strtotime($date));
$request = "INSERT INTO reports( org,date,service,value,complaints, gcompl) VALUES($iogv,'$timestamp',$service,$value,$jval,'$jst')";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>