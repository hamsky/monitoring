<?php

session_start();

require '../../../inc/dbc.php';
$iogv = $_SESSION['iogv'];
$query ="select services.* from services where services.id NOT in (select iogv_service.service from iogv_service WHERE iogv_service.iogv =$iogv)";
$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'service' => $row['service']
    );
}
$srv = array('services' => $data);
$d = json_encode($srv);
echo $d;
?>