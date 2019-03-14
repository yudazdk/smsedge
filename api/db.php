<?php

class Database{
    private $host = 'localhost';
    private $dbName = 'smsedge';
    private $user = 'root';
    private $password = '';

    public $db;

    public function __construct(){
        //heeft geen conditie nodig. moet uitgevoerd worden dus try
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->dbName";
            $this->db = new PDO($dsn, $this->user, $this->password);
        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }

    public function selectQuery($table) {
        $sth = $this->db->prepare("SELECT * FROM " . $table);
        $sth->execute();

        $result = $sth->fetchAll();
        return $result;
    }

    public function selectQueryStr($query, $fieldValues = []) {
        $statement = $this->db->prepare($query);

        if ( count($fieldValues) > 0 ) {
            $statement->execute($fieldValues);
        } else {
            $statement->execute();
        }

        return $statement->fetchAll();
    }
}