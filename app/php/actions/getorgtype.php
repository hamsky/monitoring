<?php
require '../../../inc/dbc.php';

$query = "select id,name from org_type";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'name' => $row['name']
    );
}

$res = array('orgtypes' => $data);
$d = json_encode($res);
echo $d;
?>

