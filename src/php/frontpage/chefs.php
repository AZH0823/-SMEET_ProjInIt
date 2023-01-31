<?php
    include("../conectDB/Connection.php");
    
    //建立SQL
    $sql = "SELECT `Name`,`Job`,`IMG`, `TeamID` FROM Chefs";

    $statement = getPDO()->prepare($sql);  

    $result = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    echo json_encode($data);    

?>