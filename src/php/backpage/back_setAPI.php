<?php
    include ('../conectDB/Connection.php');

    //  單撈一筆
    //  $keyword =$_GET["id"];  
    //  $SearhDishSql = " SELECT * FROM `Dish` where id = ? ";
    
    //  撈全部 Set 套資資訊
    $SearhDishSql = " SELECT  d.ID as id, d.`Name` as disName,d.Price, d.SetID,dt.`Name` as dishType, d.Condition
    FROM Dish d
        join DishsType dt
            on d.`type` = dt.ID
    where d.ProductType = '私廚單點' and dt.`Name` != '單品' ";
    // 將include Connection Fuction 給引出
    $Searhstatement = getPDO()->prepare($SearhDishSql);

    // 單筆
    //  $Searhstatement -> bindValue(1,$keyword); 
    $Searhstatement -> execute();

 
    $searchData = $Searhstatement -> fetchAll();
    
    $arr=array();
    foreach($searchData as $newData){
        $arr[] = array(
                    'id'=>$newData['id'],
                    'dishName' => $newData['disName'],
                    'price'=> $newData['Price'],
                    'SetID'=> $newData['SetID'],
                    'dishType'=>$newData['dishType'],
                    'Condition'=>$newData['Condition']
        );
    }

    echo json_encode($arr);
    // 吐回給ajax
    // echo json_encode($searchData);

?>