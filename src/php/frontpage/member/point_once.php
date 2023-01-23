<?php
    $member_ID = $_POST['member_ID'] =2;
    $dish_ID = $_POST['dish_ID'] =50;
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $check = 'SELECT DishID
    FROM FavoriteLists
    WHERE Member_ID =  ?  and DishID = ? ';

    $statement1 = getPDO()->prepare($check);  
    $statement1->bindValue(1, $member_ID);  
    $statement1->bindValue(2, $dish_ID);  
    $result1 = $statement1->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement1->fetchAll();

    if ($data){
        // 收藏重複
        echo "Y";
    }else{
        // // 建立SQL語法-取得會員資訊
        $sql = "INSERT into FavoriteLists( DishID, collectionTime, Member_ID)
        value( ?, now(), ?)";
        $statement = getPDO()->prepare($sql);  
        $statement->bindValue(1, $dish_ID);  
        $statement->bindValue(2, $member_ID);  
        $result = $statement->execute();   

        // 收藏不重複
        echo "N";
    };    
?>