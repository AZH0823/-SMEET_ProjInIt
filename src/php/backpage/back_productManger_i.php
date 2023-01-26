<?php

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    $dish_Type = $_POST['dish_Type'] ;
    $dish_Name = $_POST['dish_Name'] ;
    $dish_Price = $_POST['dish_Price'] ;
    $dish_ShopPoint = $_POST['dish_ShopPoint'] ;
    $dish_Introduction = $_POST['dish_Introduction'] ;
    $dish_IMG = $_POST['dish_IMG'] ;

    // //建立SQL語法 
    $check = 'SELECT *
    FROM Dish
    WHERE Name = ?';

    $statement1 = getPDO()->prepare($check);  
    $statement1->bindValue(1, $dish_Name);  
    $result1 = $statement1->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement1->fetchAll();

    if ($data){
        // 收藏重複
        echo "Y";
    }else{
        // // 建立SQL語法-
        $sql = "INSERT into Dish( `Type`, `Name`, `Price`, `IMG`, `ShopPoint`, `Introduction`, `Condition`, `pushisedDate`, `ProductType`)
        value( ?, ?, ?, ?, ?, ?, 1, now(), '商城冷凍')";
        $statement = getPDO()->prepare($sql);  
        $statement->bindValue(1, $dish_Type);  
        $statement->bindValue(2, $dish_Name);  
        $statement->bindValue(3, $dish_Price);      
        $statement->bindValue(4, $dish_IMG);  
        $statement->bindValue(5, $dish_ShopPoint);  
        $statement->bindValue(6, $dish_Introduction);  
        $result = $statement->execute();   

        // 收藏不重複
        echo "N";
    };    

?>