<?php

require 'UsersModel.php';

$userObj = new \api\users\usersModel();
$users = $userObj->getUsers();

header('Access-Control-Allow-Origin: *');
echo json_encode($users); ?>
