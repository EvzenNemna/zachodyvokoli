<?php
require_once "db.php";
$json = @file_get_contents('php://input');
$array = json_decode($json, true);
echo strval($array["isZadarmo"]);
$sql ="select * from zachod";
$result = $conn->query($sql);
$count_zachod = $result->num_rows;

$lat = strval($array["latitude"]);
$lng = strval($array["longitude"]);
$zdarma = 0;
if(strval($array["isZadarmo"]) == "Zdarma"){
    $zdarma = "1";
}
$vstupni_kod = intval($array["pin"]);

$sql ="insert into zachod values($count_zachod+1,"."$lat".",$lng,"."$zdarma,"."$vstupni_kod".");";
$result = $conn->query($sql);