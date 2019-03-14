<?php

require 'config.php';
require 'countriesModel.php';

$countryObj = new \api\countries\countriesModel();
$countries = $countryObj->getCountries();

header("Access-Control-Allow-Origin: " . ALLOWED_DOMAIN);
echo json_encode($countries); ?>