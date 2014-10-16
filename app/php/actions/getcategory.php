<?php

require '../../../inc/dbc.php';

$query = "SELECT id, category from catsv";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'category' => $row['category'],
       
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'category' => $res);
$d = json_encode($myData);
echo $d;
?>