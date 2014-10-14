<?php

require '../../../inc/dbc.php';

$iogv = $_POST['org'];
$date = $_POST['date'];
$subdiv = $_POST['subdiv'];
$query = "select iogv_service.iogv,iogv_service.service, services.service as srv, orgsubdiv.name as subdiv, reports.date as rdate,reports.value as rval,reports.complaints as complaints, reports.gcompl as gcompl from iogv_service, services, orgsubdiv, reports where iogv_service.iogv = $iogv and iogv_service.subdivId =$subdiv and services.id= iogv_service.service and orgsubdiv.id = iogv_service.subdivId and reports.org=iogv_service.iogv and reports.service = iogv_service.service and DATE_FORMAT(reports.date, '%m/%Y')='$date'";


$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'value' => $row['rval'],
        'service' => $row['srv'],
        'date' => $row['rdate'],
        'complaints' => $row['complaints'],
        'gcompl' => $row['gcompl'],
        'subdiv' => $row['subdiv']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'services' => $res);
$d = json_encode($myData);
echo $d;
?>