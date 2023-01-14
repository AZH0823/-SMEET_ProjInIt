<?php
    include("../conectDB/Connection.php");
    
    //建立SQL
    $sql = "SELECT * FROM CHEFS";

    $sql = "SELECT c.ID, c.Name, `Job`, `IMG`,`TeamID`
    FROM smeet.Chefs c
    join smeet.Teams t
    on c.ID = t.ID 
    where TeamID = '1'";


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
            'Name'=> $newData['Name'],
            'Job'=> $newData['Job'],
            'IMG'=> $newData['IMG'],
            'TeamID'=> $newData['TeamID'],
        );
    }


    // 回傳json
    echo json_encode($arr); 
    // // echo json_encode($data);     


?>