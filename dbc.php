<?php
$hostname = "mysql.hostinger.ru";
$username = "u802804712_sdgu";
$password = "rk53s7";
$database = "u802804712_iogvm";
$conn=mysql_connect($hostname,$username,$password) or die("Не могу создать соединение");
mysql_select_db($database) or die ("Не могу выбрать БД");
mysql_set_charset ("utf8");
?>
