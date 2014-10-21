<?php

require '../../../inc/dbc.php';

$org = $_GET['org'];
$query = "select id,name from orgsubdiv WHERE orgId = $org";
$result = mysql_query($query);



while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'name' => $row['name']
    );
}

$res = array('subdivs' => $data);
$d = json_encode($res);
echo $d;
?>



