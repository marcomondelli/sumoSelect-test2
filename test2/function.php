<?php

$SingleVal = $_POST['SingleVal'];
$multiVal = $_POST['multiVal'];

$singleSelected = implode(', ', $SingleVal);
$multiSelected = implode(', ', $multiVal);

$response = array(
    'selectedVal' => "Single Select: $singleSelected | Multi Select: $multiSelected"
);

echo json_encode($response);
?>
