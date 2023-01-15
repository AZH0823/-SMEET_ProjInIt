<?php
    include("../conectDB/Connection.php");
    
    //建立SQL
    $sql = "SELECT * FROM TEAMS";

    $sql = "SELECT t.ID, `LederName`, `LederProfiles`
    FROM smeet.Teams t
    join smeet.Chefs c
    on d.ID = c.ID 
    where t.ID = '1'";


    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
    $result = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    print_r($data);

    // print_r ($data);
    $arr = [];

    foreach($data as $newData){
        $arr[] = array(
            'ID'=>$newData['ID'],
            'LederName'=> $newData['LederName'],
            'LederProfiles'=> $newData['LederProfiles'],
        );
    }


    // 回傳json
    echo json_encode($arr); 
    // // echo json_encode($data);      

?>