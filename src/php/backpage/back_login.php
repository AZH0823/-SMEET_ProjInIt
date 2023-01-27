<?php
    $account = $_POST["account"];
    $pwd = $_POST["pwd"];

    include('../conectDB/Connection.php');

    //建立SQL
    $sql = "SELECT * FROM Member WHERE ID = 1 and Email = ? and `Password` = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);    
    $statement->bindValue(1, $account);  
    $statement->bindValue(2, $pwd);
    $statement->execute();
    $data = $statement->fetchAll();

    //依資料筆數判斷是否為會員
    if(count($data) > 0){

        include("../conectDB/member_statue.php");

        //將登入資訊寫入session
        setSessionB($account);

        //登入成功
        echo "Y";
    }else{
       //登入失敗
       echo "N";
    }
?>