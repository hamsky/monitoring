<?php

session_start();

require '../../../inc/dbc.php';

$data = json_decode($_POST['services'], true);
$iogv = $_SESSION['iogv'];

foreach ($data as $key => $value) {
    mysql_query("INSERT INTO iogv_service (iogv,service) VALUES($iogv," . $value['id'] . ")");
}
?>