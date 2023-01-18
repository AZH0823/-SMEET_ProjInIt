<?php
   
    $ID = $_POST['ID'];
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
       $sql = "DELETE FROM FavoriteLists WHERE ID = ?";
       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $ID);  
       $result = $statement->execute();  
       
?>