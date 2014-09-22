<?php

//error_reporting(E_ALL);
//ini_set("display_errors", 1);
session_start();
include 'dbc.php';
$action = $_POST['action'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$iogv = $_POST['iogvs'];
$id = $_SESSION['uid'];

switch ($action) {
    case'logout':
        logout();
        echo "{success:true}";
        break;
    case 'getorgname':
        echo "{success:true,name:'" . $_SESSION['iogv_name'] . "'}";
        break;
    case'registration':
        $request = "INSERT INTO users( login,password, email,org,ulevel) VALUES('$username',MD5('$password'),'$email','$iogv',2)";
        if (mysql_query($request)) {
            echo "{success:true}";
        } else {
            echo "{success:false}";
        }
        break;
    case 'addservice':
        $servicename = $_POST['servicename'];
        $request = "INSERT INTO services(service) VALUES('$servicename')";
        if (mysql_query($request)) {
            echo "{success:true}";
        } else {
            echo "{success:false,err:" . mysql_error() . "}";
        }
        break;
    case 'getuserv':
        $iogv = $_POST['org'];
        $query = "select reports.id, reports.date, reports.service as srvid, reports.value, reports.complaints, reports.gcompl, services.service from reports, services where org=$iogv and services.id=reports.service ";
        $result = mysql_query($query);

        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {

            $service = $row['srvid'];

            $query2 = "select orgsubdiv.name from orgsubdiv, iogv_service where (iogv_service.iogv=$iogv and iogv_service.service=$service) and orgsubdiv.id = iogv_service.subdivId limit 1";

            $result2 = mysql_query($query2);

            while ($row2 = mysql_fetch_array($result2, MYSQL_ASSOC)) {
                $subdiv = $row2['name'];
            }
            $data[] = array(
                'value' => $row['value'],
                'service' => $row['service'],
                'date' => $row['date'],
                'complaints' => $row['complaints'],
                'gcompl' => $row['gcompl'],
                'subdiv' => $subdiv
            );
        }

        $res = array_slice($data, $_GET['limit'] * ($_GET['page'] - 1), $_GET['limit']);
        $myData = array('total' => count($data), 'services' => $res);
        $d = json_encode($myData);
        echo $d;
        break;
}

function checkLoggedIn() {
    if (!isset($_SESSION["loggedIn"])) {
        header("Location: login.php");
        exit();
    } else if (isset($_SESSION["loggedIn"]) && $_SESSION["loggedIn"] === true) {
        header("Location: index.php");
        exit();
    }
}

function logout() {
    unset($_SESSION["loggedIn"]);
    unset($_SESSION['uname']);
    unset($_SESSION['utype']);
}

?>
