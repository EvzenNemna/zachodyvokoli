<?php
require_once "db.php";
$json = @file_get_contents('php://input');
$array = json_decode($json, true);

$sql ="select * from zachod";
$result = $conn->query($sql);
$count_zachod = $result->num_rows;

$lat = strval($array["latitude"]);
$lng = strval($array["longitude"]);
//dodělat inputy
$zdarma = 1;
$vstupni_kod = 1234;

$sql ="insert into zachod values($count_zachod+1,"."$lat".",$lng,"."$zdarma,"."$vstupni_kod".");";
$result = $conn->query($sql);