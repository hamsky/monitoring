<?php

session_start();
require 'db/dbc.php';
$parent_id = $_GET['node'];
$ut = $_SESSION['utype'];
$query = "SELECT id, text,iconCls, leaf,hrefTarget FROM tmenu WHERE parent_id='" . $parent_id . "' AND (ut= 11 OR ut = $ut) ORDER BY text ASC";
$rs = mysql_query($query);
$arr = array();
while ($obj = mysql_fetch_object($rs)) {
    $arr[] = $obj;
}
echo json_encode($arr);
?>