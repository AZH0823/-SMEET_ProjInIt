<?php
    include ('../conectDB/Connection.php');

    //  撈除所有服務
    $SearhDishSql = "select id,LederName from smeet.Teams;";
   
    $Searhstatement = getPDO()->prepare($SearhDishSql);
    $Searhstatement -> execute();
    $searchData = $Searhstatement -> fetchAll();


    $arr=array();
    foreach($searchData as $newData){
        $arr[] = array(
                    'id'=>$newData['id'],
                    'name'=> $newData['LederName']
        );
    }

    echo json_encode($arr);

?>