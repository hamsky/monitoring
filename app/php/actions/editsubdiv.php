<?php
session_start();
require '../../../inc/dbc.php';
$id = $_POST['id'];
$subdiv = $_POST['subdiv'];

$query = "UPDATE orgsubdiv SET name ='$subdiv' WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}

?>

