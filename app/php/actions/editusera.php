<?php

require '../../../inc/dbc.php';

$id = $_POST['id'];
$password = $_POST['password'];
$login = $_POST['login'];
$email = $_POST['email'];
$org = $_POST['org'];
$ulevel = $_POST['ulevel'];
$enabled = $_POST['enabled'];

if (!is_numeric($org)) {
    $queryt = "SELECT id FROM iogv WHERE iogv = '$org' LIMIT 1";
    $resultt = mysql_query($queryt);

    while ($rowt = mysql_fetch_array($resultt, MYSQL_ASSOC)) {
        $org = $rowt['id'];
    }
}

if (!is_numeric($ulevel)) {
    $queryt = "SELECT id FROM user_types WHERE name = '$ulevel' LIMIT 1";
    $resultt = mysql_query($queryt);

    while ($rowt = mysql_fetch_array($resultt, MYSQL_ASSOC)) {
        $ulevel = $rowt['id'];
    }
}



$query = "UPDATE users SET login = '$login', email ='$email', org = $org, ulevel = $ulevel, enabled = '$enabled'";

if (strlen($password) > 0) {
    $query = $query . ", password =MD5('$password')";
}
$query = $query . " WHERE id = $id";

if (mysql_query($query)) {
    echo "{success:true}";
} else {
    echo "{success:false, error: " . mysql_error() . "}";
}
?>

