<?php

require 'countriesMode.php';

$countryObj = new \api\countries\countriesModel();
$countries = $countryObj->getCountries();

header('Access-Control-Allow-Origin: *');
echo json_encode($countries); ?>
