<?php
    include ('../conectDB/Connection.php');

    $SearhDishTTypeSql = " SELECT  * FROM  DishsType";
    
    $Searhstatement = getPDO()->prepare($SearhDishTTypeSql);
    $Searhstatement -> execute();

        
    $searchData = $Searhstatement -> fetchAll();
    
    $arr=array();
    foreach($searchData as $newData){
        $arr[] = array(
                    'dishTypeID'=>$newData['ID'],
                    'dishTypeName' => $newData['Name']
        );
    }

    echo json_encode($arr);
?>