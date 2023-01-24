<?php
    
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $select = 'SELECT ID, Email, Name, Phone, BirthDate, Sex, Address, multiLogin, point
    FROM Member';

    $statement = getPDO()->prepare($select);  
    $result_s = $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data_s = $statement->fetchAll();

    foreach($data_s as $newData){
        $arr_s[] = array(
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
    
        echo json_encode ($arr_s);


?>