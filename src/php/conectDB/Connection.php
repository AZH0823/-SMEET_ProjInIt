<?php
    //取得PDO物件
    function getPDO(){

        // 正是打包資料PDO 物件(請勿更動)
        // $db_host = "127.0.0.1";
        // $db_user = "tibamefe_since2021";
        // $db_pass = "vwRBSb.j&K#E";
        // $db_select = "tibamefe_tgd103g1";

        // 本地DEV PDO 物件
        $db_host = "127.0.0.1";
        $db_user = "root";
        // MySql 密碼統一
        $db_pass = "password";
        // 專案名稱  名稱統一
        $db_select = "smeet";

        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
        
    }


?>