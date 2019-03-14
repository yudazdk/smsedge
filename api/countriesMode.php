<?php

namespace api\countries;

require 'db.php';


class countriesModel {
    private $db;
    private $table = 'countries';

    public function __construct() {
        $this->db = new \Database();
    }

    public function getCountries() {
        return $this->db->selectQuery($this->table);
    }
}