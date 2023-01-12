<?php

    include("../conectDB/Connection.php");
    //---------------------------------------------------


    //建立SQL語法
    $sql = "SELECT d.ID, `Type`, d.Name,`Price`, `IMG`, `shopPoint`, `Introduction`, `Condition`, `ProductType`
    FROM smeet.Dish d
    join smeet.DishsType dt
    on d.`type` = dt.ID 
    where ProductType = '商城冷凍' AND d.ID = ?";
    

    $ProductID = $_GET["ID"];

    // echo $ProductID;


    //執行
    $statement = getPDO()->prepare($sql); 
    $statement->bindValue(1 , $ProductID);
    $statement->execute();
    $data = $statement->fetchAll();


    // print_r ($data);
    $arr = [];

    foreach($data as $newData){
        $arr[] = array(
            'ID'=>$newData['ID'],
            'Type' => $newData['Type'],
            'Name'=> $newData['Name'],
            'Price'=> $newData['Price'],
            'IMG'=> $newData['IMG'],
            'shopPoint'=> $newData['shopPoint'],
            'Introduction'=> $newData['Introduction'],
            'Condition'=> $newData['Condition'],
            'ProductType'=> $newData['ProductType'],
        );
    }


    // 回傳json
    echo json_encode($arr); 
    // // echo json_encode($data); 

    
?>