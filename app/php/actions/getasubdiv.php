<?php

require '../../../inc/dbc.php';

$query = "SELECT orgsubdiv.id, orgsubdiv.name, iogv.iogv FROM orgsubdiv INNER JOIN iogv ON orgsubdiv.orgId = iogv.id";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'subdiv' => $row['name'],
        'org' => $row['iogv']
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'subdivisions' => $res);
$d = json_encode($myData);
echo $d;
?>