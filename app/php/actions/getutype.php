<?php

require '../../../inc/dbc.php';

$query = "select id,name from user_types";
$result = mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'name' => $row['name']
    );
}

$utypes = array('utypes' => $data);
$d = json_encode($utypes);
echo $d;
?>