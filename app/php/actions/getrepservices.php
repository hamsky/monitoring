<?php

session_start();
require '../../../inc/dbc.php';
$query = "select iogv_service.service, services.service , services.id from iogv_service, services WHERE  ( services.id = iogv_service.service) and iogv_service.iogv=". $_SESSION['iogv'];
$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'service' => $row['service']
    );
}

$srv = array('repservices' => $data);
$d = json_encode($srv);
echo $d;
?>
