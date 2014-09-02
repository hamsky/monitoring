<?php

session_start();
require '../../../inc/dbc.php';

$iogv = $_SESSION['iogv'];


$query = "SELECT iogv_service.id, iogv.iogv, services.service, orgsubdiv.name FROM iogv_service, iogv, services,orgsubdiv WHERE services.id = iogv_service.service AND iogv.id =$iogv AND iogv_service.iogv =$iogv AND orgsubdiv.id=iogv_service.subdivId";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data_c[] = array(
        'id' => $row['id'],
        'iogv' => $row['iogv'],
        'service' => $row['service'],
        'subdiv' => $row['name']
    );
}
$res = array_slice($data_c, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data_c), 'services' => $res);
$d = json_encode($myData);
echo $d;
?>