<?php

require '../../../inc/dbc.php';

$query = "SELECT iogv.id, iogv.iogv, iogv.manage, org_type.name FROM iogv INNER JOIN org_type ON iogv.type = org_type.id
WHERE org_type.name = 'ИОГВ'";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'iogv' => $row['iogv'],
        'manage' => $row['manage'],
        'type' => $row['name']
    );
}


$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'orglist' => $res);
$d = json_encode($myData);
echo $d;


?>
