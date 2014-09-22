<?php

session_start();
require '../../../inc/dbc.php';
$id = $_POST['id'];
$subdiv = $_POST['subdiv'];
$org = $_POST['org'];


if (!is_numeric($org)) {
    $queryt = "SELECT id FROM iogv WHERE iogv = '$org' LIMIT 1";
    $resultt = mysql_query($queryt);

    while ($rowt = mysql_fetch_array($resultt, MYSQL_ASSOC)) {
        $org = $rowt['id'];
    }
}

$query = "UPDATE orgsubdiv SET name ='$subdiv', orgId=$org WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>
