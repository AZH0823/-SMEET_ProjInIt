<?php
    $search_name = $_POST["search_name"] ;
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $select = 'SELECT ID, Email, Name, Phone, BirthDate, Sex, Address, multiLogin, point
    FROM Member WHERE Name like ? ';

    $statement = getPDO()->prepare($select);
    $statement->bindValue(1, "%$search_name%" );
    $result = $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if(count($data)>0){
        foreach($data as $newData){
            $arr[] = array(
                'ID'=>$newData['ID'],
                'Email'=>$newData['Email'],
                'Name'=>$newData['Name'],
                'Phone' => $newData['Phone'],
                'BirthDate'=> $newData['BirthDate'],
                'Sex'=> $newData['Sex'],
                'Address'=> $newData['Address'],
                'multiLogin'=> $newData['multiLogin'],
                'point'=> $newData['point']
            );};
        
         echo json_encode ($arr);
    }else{
        echo json_encode ("無資料");
    }


?>