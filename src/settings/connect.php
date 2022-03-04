<?php

namespace IceStacks\Address\settings;

use Arrilot\DotEnv\DotEnv;
use PDO;
use PDOException;

class connect
{
    protected function dbConnect(): PDO|string
    {
        DotEnv::load(".env.php");
        $dbHost = DotEnv::get("DB_HOST");
        $dbName = DotEnv::get("DB_NAME");
        $dbUser = DotEnv::get("DB_USER");
        $dbPassword = DotEnv::get("DB_PASSWORD");
        try {
            $db = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", "$dbUser", "$dbPassword");
        } catch (PDOException $error) {
            $db = $error->getMessage();
        }
        return $db;
    }
}
