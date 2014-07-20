<?php
$hostname = "localhost";
$username = "root";
$password = "1";
$database = "iogv_mon";
$conn=mysql_connect($hostname,$username,$password) or die("Не могу создать соединение");
mysql_select_db($database) or die ("Не могу выбрать БД");
mysql_set_charset ("utf8");
?>