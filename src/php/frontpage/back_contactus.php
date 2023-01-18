<?php
    include("../conectDB/Connection.php");

    
    //建立SQL
    $sql = "SELECT * FROM Contact";



   
    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
   $statement->execute();  
   

    // 抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r($data);
    
    echo json_encode($data);




?>