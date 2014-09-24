<?php

require '../../../inc/dbc.php';

$iogv = $_POST['org'];
$date = $_POST['date'];

$query = "select reports.id, reports.date, reports.service as srvid, reports.value, reports.complaints, reports.gcompl, services.service from reports, services where org=$iogv and services.id=reports.service and DATE_FORMAT(reports.date, '%m/%Y')='$date'";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {

    $service = $row['srvid'];

    $query2 = "select orgsubdiv.name from orgsubdiv, iogv_service where (iogv_service.iogv=$iogv and iogv_service.service=$service) and orgsubdiv.id = iogv_service.subdivId limit 1";

    $result2 = mysql_query($query2);

    while ($row2 = mysql_fetch_array($result2, MYSQL_ASSOC)) {
        $subdiv = $row2['name'];
    }
    $data[] = array(
        'value' => $row['value'],
        'service' => $row['service'],
        'date' => $row['date'],
        'complaints' => $row['complaints'],
        'gcompl' => $row['gcompl'],
        'subdiv' => $subdiv
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array( 'total' => count($data), 'services' => $res);
$d = json_encode($myData);
echo $d;
?>