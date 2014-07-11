<?php

require '../inc/dbc.php';

$query = "SELECT iogv.id, iogv.iogv, iogv.manage FROM iogv";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'iogv' => $row['iogv'],
        'manage' => $row['manage']
        );
}
$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'iogvlist' => $res);
$d = json_encode($myData);
echo $d;
?>