<?php

require 'config.php';
require 'UsersModel.php';

$userObj = new \api\users\usersModel();
$users = $userObj->getUsers();

header('Access-Control-Allow-Origin: ' . ALLOWED_DOMAIN);
echo json_encode($users); ?>