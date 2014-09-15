<?php

session_start();
require '../../inc/dbc.php';
$subdiv = $_POST['subdiv'];
$id = $_POST['id'];

$query = "UPDATE iogv_service SET subdivId ='$subdiv' WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>