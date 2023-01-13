<?php

    
    $member_ID = $_POST['member_ID'];
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
       $sql = "SELECT Email, password, Name, Phone, BirthDate, Sex, Address FROM Member WHERE ID = ?";
       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $member_ID);  
       $result = $statement->execute();  

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
        // print_r ($data);
    //    echo json_encode($data);
           foreach($data as $newData){
                $arr[] = array(
                    'account'=>$newData['Email'],
                    'pwd'=>$newData['password'],
                    'name'=>$newData['Name'],
                    'phone' => $newData['Phone'],
                    'birthday'=> $newData['BirthDate'],
                    'sex'=> $newData['Sex'],
                    'addr'=> $newData['Address'],
            );
        echo json_encode ($arr);
    }
       
?>