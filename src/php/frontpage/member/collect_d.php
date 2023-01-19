<?php

    $dish_ID = $_POST['dish_ID'];
    $member_ID = $_POST['member_ID'];
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
    $sql = "DELETE FROM FavoriteLists WHERE DishID = :D_del_ID and Member_ID = :M_del_ID ";
    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(':D_del_ID', $dish_ID);  
    $statement->bindValue(':M_del_ID', $member_ID);  
    $result = $statement->execute();  
    
?>