<?php

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    $dish_Type = $_POST['dish_Type'] ;
    $dish_Name = $_POST['dish_Name'] ;
    $dish_Price = $_POST['dish_Price'] ;
    $dish_IMG = $_POST["dish_IMG"];
    $dish_ShopPoint = $_POST['dish_ShopPoint'] ;
    $dish_Introduction = $_POST['dish_Introduction'] ;
    $dish_Condition = $_POST['dish_Condition'] ;

    // echo $dish_Type;
    // echo $dish_Name;
    // echo $dish_Price;
    // echo $dish_IMG;
    // echo $dish_ShopPoint;
    // echo $dish_Introduction;

    // 建立SQL語法 
    $check = 'SELECT *
    FROM Dish
    WHERE Name = ?';

    $statement1 = getPDO()->prepare($check);  
    $statement1->bindValue(1, $dish_Name);  
    $result1 = $statement1->execute();  

    // 抓出全部且依照順序封裝成一個二維陣列
    $data = $statement1->fetchAll();

    if ($data){
        // 商品重複
        echo "Y";
        
    }else{

        // 建立SQL語法-  
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
        

        // 檢查更新是否一樣
        $checkUpdateResultSQL = "SELECT * 
        FROM Dish
        where
            `Type` = :Type and 
            `Name` = :Name and 
            `price` = :price and 
            `Condition` = :Condition";

        $checkUpdateResultSQL = getPDO()->prepare($checkUpdateResultSQL);
        $checkUpdateResultSQL -> bindValue(':Type', $dish_Type);
        $checkUpdateResultSQL -> bindValue(':Name', $dish_Name);
        $checkUpdateResultSQL -> bindValue(':price', $dish_Price);
        $checkUpdateResultSQL -> bindValue(':Condition', $dish_Condition);
        $checkUpdateResultSQL -> execute();
        $checkresult = $checkUpdateResultSQL -> fetch();


        // 渲染最新的資料
        $sql = "SELECT d.ID, `Type`, d.Name,`Price`, `IMG`, `shopPoint`, `Introduction`, `Condition`, `pushisedDate`, `ProductType`
        FROM Dish d
        join DishsType dt
        on d.`type` = dt.ID 
        where ProductType = '商城冷凍'
        order by pushisedDate desc
        limit 1";
        

        //執行
        $statement = getPDO()->prepare($sql); 
        $statement->execute();
        $data = $statement->fetchAll();

        $arr = [];

        foreach($data as $newData){
            $arr[] = array(
                'ID'=>$newData['ID'],
                'Type' => $newData['Type'],
                'Name'=> $newData['Name'],
                'Price'=> $newData['Price'],
                'IMG'=> $newData['IMG'],
                'Condition'=> $newData['Condition'],
            );
        }


        echo json_encode($arr); 

    };    

?>