<?php


session_start();
require '../../../inc/dbc.php';
$iogv = $_POST['iogv'];
$manage = $_POST['manage'];
$type = $_POST['type'];

if (!is_numeric($type)) {
    $queryt = "SELECT id FROM org_type WHERE name = '$type' LIMIT 1";
    $resultt = mysql_query($queryt);

    while ($rowt = mysql_fetch_array($resultt, MYSQL_ASSOC)) {
        $type = $rowt['id'];
    }
}

$request = "INSERT INTO iogv(iogv,manage,type) VALUES('$iogv','$manage','$type')";
if (mysql_query($request)) {
    echo "{success:true}";
} else {
    echo "{success:false" . mysql_error() . "}";
}
?>