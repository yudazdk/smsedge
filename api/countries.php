<?php

require 'countriesModel.php';

$countryObj = new \api\countries\countriesModel();
$countries = $countryObj->getCountries();

header("Access-Control-Allow-Origin: http://localhost:3000");
echo json_encode($countries); ?>