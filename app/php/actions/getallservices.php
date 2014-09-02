<?php

session_start();
require '../../../inc/dbc.php';
$query = "select * from  services";
$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'service' => $row['service']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'services' => $res);
$d = json_encode($myData);
echo $d;
?>