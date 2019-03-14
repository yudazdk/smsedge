<?php

namespace api\users;

require 'db.php';


class usersModel extends \Database {
    public function __construct() {
        parent::__construct();
    }

    public function getUsers() {
        $query = "SELECT * FROM users where usr_active=1";

        return $this->selectQueryStr($query);
    }
}