<?php
session_start();

require '../../../inc/dbc.php';

$uid = $_SESSION['uid'];


$query = "SELECT users.*, iogv.iogv FROM users INNER JOIN iogv on users.org=iogv.id WHERE users.id = $uid";

$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'login' => $row['login'],
        'email' => $row['email'],
        'enabled' => $row['enabled'],
        'org' => $row['iogv']
    );
}

$d = json_encode($data);
echo $d;
?>