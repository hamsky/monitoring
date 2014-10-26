<?php
session_start();
require '../../../inc/dbc.php';

$org = $_SESSION['iogv'];

$query = "select smev.id as sid_, svname.name as sname, foiv.name as sfoiv, catsv.category as cat, varp.type_ as stype from smev,svname,foiv,catsv,varp WHERE  smev.org =$org and svname.id =smev.name and foiv.id=smev.foiv and catsv.id =smev.category and varp.id= smev.type_";
$result = mysql_query($query);


while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['sid_'],
        'name'=>$row['sname'],
        'foiv'=>$row['sfoiv'],
        'category'=>$row['cat'],
        'type_' => $row['stype']
       
    );
}

$res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
$myData = array('total' => count($data), 'infsmev' => $res);
$d = json_encode($myData);
echo $d;
?>