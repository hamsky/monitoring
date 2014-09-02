<?php

session_start();
require '../../../inc/dbc.php';
$query = "select users.*, iogv.iogv,user_types.name from users inner join iogv on users.org = iogv.id inner join user_types on users.ulevel = user_types.id";
$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'login' => $row['login'],
        'password' => '', //$row['password'],
        'email' => $row['email'],
        'enabled' => $row['enabled'],
        'org' => $row['iogv'],
        'ulevel' => $row['name']
    );
}

$srv = array('users' => $data);
$d = json_encode($srv);
echo $d;
?>