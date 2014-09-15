<?php
session_start();
require '../../../inc/dbc.php';
$id = $_POST['id'];
$subdiv = $_POST['subdiv'];
$org = $_POST['org'];

$query = "UPDATE orgsubdiv SET name ='$subdiv', orgId=$org WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}

?>

