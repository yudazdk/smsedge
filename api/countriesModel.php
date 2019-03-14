<?php

namespace api\countries;

require 'db.php';

class countriesModel extends \Database {
    private $table = 'countries';

    public function __construct() {
        parent::__construct();
    }

    public function getCountries() {
        return $this->selectQuery($this->table);
    }
} ?>