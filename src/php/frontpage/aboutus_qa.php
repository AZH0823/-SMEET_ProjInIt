<?php
    include("../conectDB/Connection.php");

    
    //建立SQL
    $sql = "SELECT * FROM QA
    WHERE Category = '預約流程'";


    // $sql = "INSERT INTO Contact (ReleaseDate,Name, Phone, Email, Category, SuggesContent, Condition)value (now(),'{$Name}','{$Phone}','{$Mail}','{$Category}','{$SuggesContent}',1)";

   
    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
   $statement->execute();  
   

    // 抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r($data);
    
    echo json_encode($data);




?>