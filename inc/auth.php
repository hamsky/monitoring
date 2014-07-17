<?php

session_start();

require 'dbc.php';
require 'config.php';

$login = $_POST['login'];
$passw = MD5($_POST['password']);

$query = "SELECT * FROM users WHERE login=\"$login\" LIMIT 1";
$rs = mysql_query($query);
while ($row = mysql_fetch_array($rs)) {

    if ($row["login"] == $login) {
        if ($row["password"] == $passw) {
            $_SESSION['uid'] = $row['id'];
            $_SESSION["loggedIn"] = "true";
            $_SESSION['uname'] = $row["login"];
            $_SESSION['iogv'] = $row["org"];
            $query2 = "SELECT * FROM user_types WHERE id =" . $row['ulevel'];
            $rs2 = mysql_query($query2);
            $row2 = mysql_fetch_array($rs2);
            $_SESSION['utype'] = $row2['level'];
            $qiogv = "SELECT iogv FROM iogv WHERE id=" . $_SESSION['iogv'];
            $rs3 = mysql_query($qiogv);
            $row3 = mysql_fetch_array($rs3);
            $_SESSION['iogv_name'] =$row3['iogv'];
        }
        echo "{success:true, text:'Вход осуществлён успешно'}";
    }
}

if (!isset($_SESSION["loggedIn"])) {
    echo "{success:false, text:'Не верный пароль или имя пользователя'}";
}
?>