<?php

    $account = $_POST["account"];
    $pwd = $_POST["pwd"];


    include('../conectDB/Connection.php');

       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM SMEET.Member where Email = ? and Password = ? " ;

       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $account);  
       $statement->bindValue(2, $pwd);
       $statement->execute();  

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       if(count($data)>0){
              echo "Y";

              // set session
              session_start();
              $_SESSION["account"] = $account;

              //redirect
              // header("Location:Welcome.php");

       }else{
              echo "N";

       };
       

?>