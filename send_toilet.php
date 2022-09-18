<?php
require_once "db.php";
$json = @file_get_contents('php://input');
$array = json_decode($json, true);
echo var_dump($array);
$sql ="select * from zachod";
$result = $conn->query($sql);
$count_zachod = $result->num_rows;
echo strval($array["isZadarmo"]);
$lat = strval($array["latitude"]);
$lng = strval($array["longitude"]);
$popis = $array["popis"];
$zdarma = 0;
if(strval($array["isZadarmo"]) == "Zdarma"){
    $zdarma = "1";
}
$vstupni_kod = intval($array["pin"]);
echo $popis;
$sql ="insert into zachod(id,popis,latitude,longitude,zdarma,vstupni_kod) values($count_zachod+1,"."'$popis',"."$lat".",$lng,"."$zdarma,"."$vstupni_kod".");";
echo $sql;
$result = $conn->query($sql);