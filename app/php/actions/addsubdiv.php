<?php

session_start();

require '../db/dbc.php';

$iogv = ($_POST['org'] < 0) ? $_SESSION['iogv'] : $_POST['org'];
$subdiv = $_POST['subdiv'];
$query = "INSERT INTO orgsubdiv(name,orgId) VALUES('$subdiv',$iogv)";
if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false,err: " . mysql_error() . "}";
}
?>