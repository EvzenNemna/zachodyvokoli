<?php
require_once "db.php";

$sql = "select * from zachod";
$result = $conn->query($sql);

$marker_information = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $latitude = $row["latitude"];
        $longitude = $row["longitude"];
        $is_free = $row["zdarma"];
        $entry_code = $row["vstupni_kod"];

        array_push($marker_information, array("latitude" => $latitude, "longitude" => $longitude, "is_free" => $is_free, "entry_code" => $entry_code));
    }
}

echo json_encode($marker_information)

?>


