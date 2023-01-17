<?php
   
    $member_ID = $_POST['member_ID'];
    $dish_ID = $_POST['dish_ID'];
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
       $sql = "INSERT into FavoriteLists( DishID, collectionTime, Member_ID)
       value( ?, now(), ?)";
       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $dish_ID);  
       $statement->bindValue(1, $member_ID);  
       $result = $statement->execute();  
        
?>