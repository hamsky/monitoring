<?php

require '../../../inc/dbc.php';

$query = "SELECT id, name from svname";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
       
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'inf' => $res);
$d = json_encode($myData);
echo $d;
?>