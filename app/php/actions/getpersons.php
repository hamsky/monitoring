<?php

require '../../../inc/dbc.php';

$query = "select id,initials from persons";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'initials' => $row['initials']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'persons' => $res);
$d = json_encode($myData);
echo $d;
?>