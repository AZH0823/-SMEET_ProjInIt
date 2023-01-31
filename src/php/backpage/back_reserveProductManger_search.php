<?php
    $search_name = $_POST["search_name"] ;
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    
    $select = "SELECT d.ID, d.SetID,d.Name,d.Price,d.Condition,d.ProductType,dt.Name as dishTypeName
        FROM Dish d
        JOIN DishsType dt
        ON d.`Type` = dt.ID
        where (d.`Type` = 7 OR d.`Type` = 11) AND d.Name like :keyword"
    ;
    
    $statement = getPDO()->prepare($select);
    $statement->bindValue(":keyword", "%$search_name%" );
    $result = $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    $arr = array();
    if(count($data) > 0){
        foreach($data as $newData){
            $arr[] = array(
                'id'=>$newData['ID'],
                'SetID'=>$newData['SetID'],
                'dishName'=> $newData['Name'],
                'dishType'=> $newData['dishTypeName'],
                'price'=> $newData['Price'],
                'Condition'=> $newData['Condition'],
                'ProductType'=> $newData['ProductType'],
            );};
        
        echo json_encode ($arr);
    }else{
        echo json_encode ("無資料");
    }


?>