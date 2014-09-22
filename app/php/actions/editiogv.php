<?php

session_start();
require '../../../inc/dbc.php';
$iogv = $_POST['iogv'];
$manage = $_POST['manage'];
$id = $_POST['id'];
$type = $_POST['type'];
$tmp = 1;
if (!is_numeric($type)) {
    $queryt = "SELECT id FROM org_type WHERE name = '$type' LIMIT 1";
    $resultt = mysql_query($queryt);

    while ($rowt = mysql_fetch_array($resultt, MYSQL_ASSOC)) {
        $type = $rowt['id'];
    }
}


$query = "UPDATE iogv SET iogv ='$iogv' , manage ='$manage', type ='$type' WHERE id = $id";
if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>

