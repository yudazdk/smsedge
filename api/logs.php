<?php

require 'config.php';
require 'logsModel.php';

$params = [
    'from_date' => $_GET['from_date'],
    'to_date' => $_GET['to_date'],
    'country_id' => isset($_GET['country_id']) ? $_GET['country_id'] : null,
    'user_id' => isset($_GET['user_id']) ? $_GET['user_id'] : null
];

$logObj = new \api\logs\logsModel();
$logs = $logObj->getLogs($params);

header('Access-Control-Allow-Origin: ' . ALLOWED_DOMAIN);
echo json_encode($logs); ?>