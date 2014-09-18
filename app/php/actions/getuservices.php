<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
session_start();

require '../../../inc/dbc.php';

$iogv = $_SESSION['iogv'];
$query = "select reports.id, reports.date, reports.value, reports.complaints, services.service from reports, services where org=$iogv and services.id=reports.service ";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'value' => $row['value'],
        'service' => $row['service'],
        'date' => $row['date'],
        'complaints' => $row['complaints']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'services' => $res);
$d = json_encode($myData);
echo $d;
?>