<?php
    include("../conectDB/Connection.php");
    
    //建立SQL
    $sql = "SELECT * FROM TEAMS";

    // $sql = "SELECT t.ID, `LederName`, `LederProfile`, t.IMG
    // FROM smeet.Teams t
    // join smeet.Chefs c
    // on t.ID = c.ID 
    // ";



    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
    $result = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo json_encode($data);

    // print_r ($data);
    // $arr = [];

    // foreach($data as $newData){
    //     $arr[] = array(
    //         'ID'=>$newData['ID'],
    //         'LederName'=> $newData['LederName'],
    //         'LederProfile'=> $newData['LederProfile'],
    //     );
    // }


    // echo json_encode($arr);      

?>