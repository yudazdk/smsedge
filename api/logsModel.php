<?php

namespace api\users;

require 'db.php';


class logsModel {
    private $db;
    private $table = 'send_log';

    public function __construct() {
        $this->db = new \Database();
    }

    public function getLogs($params) {
        $fromDate = $params['from_date'] . ' 00:00:00';
        $toDate = $params['to_date'] . ' 23:59:59';

        $user_id = null;
        if ( !is_null($params['user_id']) ) {
            $user_id = $params['user_id'];
        }

        $country_id = null;
        if ( !is_null($params['country_id']) ) {
            $country_id = $params['country_id'];
        }

        $fieldValues = [];

        $query = "SELECT DATE_FORMAT(`log_created`,'%Y-%m-%d') as log_date, ";
        $query .= "count(CASE WHEN log_success=1 THEN 1 END) as sent_succeessfully, ";
        $query .= "count(CASE WHEN log_success=0 THEN 1 END) as sent_failed ";
        $query .= "FROM send_log ";

        if ( !is_null($country_id) ) {
            $query .= "INNER JOIN numbers ON numbers.num_id=send_log.num_id ";
            $query .= "INNER JOIN countries ON countries.cnt_id=numbers.cnt_id AND countries.cnt_id=?";

            $fieldValues[] = $country_id;
        }

        $query .= " WHERE log_created BETWEEN ? AND ?" ;
        $fieldValues[] = $fromDate;
        $fieldValues[] = $toDate;

        if ( !is_null($user_id) ) {
            $query .= " AND send_log.usr_id=?";
            $fieldValues[] = $user_id;
        }

        $query .= " GROUP BY YEAR(log_created), MONTH(log_created), DAY(log_created)";

        return $this->db->selectQueryStr($query, $fieldValues);
    }
}