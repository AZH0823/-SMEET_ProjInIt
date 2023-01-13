<?php
    include ('../conectDB/Connection.php');

    //  單撈一筆
    //  $keyword =$_GET["id"];  
    //  $SearhDishSql = " SELECT * FROM `Dish` where id = ? ";
    
    //  撈全部 Set 套資資訊
    $SearhDishSql = " SELECT  d.ID as id, d.`Name` as disName, d.SetID,dt.`Name` as dishType
    FROM Dish d
        join DishsType dt
            on d.`type` = dt.ID
    where d.ProductType = '私廚單點' and dt.`Name` != '單品'";
    // 將include Connection Fuction 給引出
    $Searhstatement = getPDO()->prepare($SearhDishSql);

    // 單筆
    //  $Searhstatement -> bindValue(1,$keyword); 
    $Searhstatement -> execute();

 
    $searchData = $Searhstatement -> fetchAll();
    // var_dump($searchData)
    
   
    // while($assoc = $Searhstatement->fetch_assoc()){
    //     $arr[] = array(
    //         'disName' => $assoc['disName'],
    //         'SetID'=> $assoc['SetID']
    //     );
    // }
    $arr=array();
    foreach($searchData as $newData){
        $arr[] = array(
                    'id'=>$newData['id'],
                    'dishName' => $newData['disName'],
                    // 'Price'=> $newData['Price'],
                    'SetID'=> $newData['SetID'],
                    'dishType'=>$newData['dishType']
        );
    }

    echo json_encode($arr);
    // 吐回給ajax
    // echo json_encode($searchData);

?>