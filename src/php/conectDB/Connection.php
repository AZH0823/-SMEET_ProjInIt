<?php
    //取得PDO物件
    function getPDO(){

        $db_host = "127.0.0.1";
        $db_user = "root";
        // MySql 密碼統一
        $db_pass = "poping123";
        // 專案名稱  名稱統一
        $db_select = "smeet";

        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
        
    }


?>