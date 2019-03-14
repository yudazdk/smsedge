<?php

namespace api\users;

require 'db.php';


class usersModel {
    private $db;
    private $table = 'users';

    public function __construct() {
        $this->db = new \Database();
    }

    public function getUsers() {
        $query = "SELECT * FROM users where usr_active=1";

        return $this->db->selectQueryStr($query);
    }
}