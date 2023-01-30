<?php
    $search_name = $_POST["search_name"] ;
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    
    $select = " SELECT d.ID, `Type`, d.Name,`Price`, `IMG`, `shopPoint`, `Introduction`, `Condition`, `pushisedDate`, `ProductType`
    FROM Dish d
    join DishsType dt
    on d.`type` = dt.ID 
    where ProductType = '商城冷凍' and d.Name like ?";

    $statement = getPDO()->prepare($select);
    $statement->bindValue(1, "%$search_name%" );
    $result = $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if(count($data)>0){
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
            );};
        
        echo json_encode ($arr);
    }else{
        echo json_encode ("無資料");
    }


?>