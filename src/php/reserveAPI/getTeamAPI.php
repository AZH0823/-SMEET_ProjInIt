<?php
    include ('../conectDB/Connection.php');

    //  撈除所有服務
    $SearhDishSql = "SELECT ID,LederName,team FROM Teams;";
   
    $Searhstatement = getPDO()->prepare($SearhDishSql);
    $Searhstatement -> execute();
    $searchData = $Searhstatement -> fetchAll();


    $arr=array();
    foreach($searchData as $newData){
        $arr[] = array(
                    'id'=>$newData['ID'],
                    'team' =>$newData['team'],
                    'name'=> $newData['LederName']
        );
    }

    echo json_encode($arr);

?>