<?php

require '../../../inc/dbc.php';

$query = "SELECT id, type_ from smev,varp,foiv,svname,catsv";
$result = mysql_query($query);


while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'name'=>$row['name'],
        'foiv'=>$row['foiv'],
        'category'=>$row['category'],
        'type_' => $row['type_']
       
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'infsmev' => $res);
$d = json_encode($myData);
echo $d;
?>