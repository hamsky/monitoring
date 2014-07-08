<?php

session_start();

require '../db/dbc.php';

$_SESSION['iogv'] = 1;

$query = "SELECT id, name FROM orgsubdiv WHERE orgId=" . $_SESSION['iogv'];

$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'subdiv' => $row['name']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'subdivisions' => $res);
$d = json_encode($myData);
echo $d;
?>