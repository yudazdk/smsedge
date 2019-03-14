<?php

require 'UsersModel.php';

$userObj = new \api\users\usersModel();
$users = $userObj->getUsers();

header('Access-Control-Allow-Origin: http://localhost:3000');
echo json_encode($users); ?>