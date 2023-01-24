<?php
    $member_ID = $_POST["member_ID"] ;
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    
    //建立SQL
    $collect = 'SELECT m.ID, Email, m.Name, Phone, BirthDate, Sex, Address, multiLogin, point, f.DishID, f.Name as DishName, CAST(collectionTime as DATE) as collectionTime , f.TypeName 
    FROM Member m
    join (SELECT f.DishID, d.Name, collectionTime , d.TypeName, f.Member_ID
            FROM FavoriteLists f
                join (SELECT  d.ID, t.Name as TypeName, d.Name 
                        FROM Dish d
                            join DishsType t
                            on d.Type = t.ID) d
                    on f.DishID = d.ID) f
        on m.ID = f.Member_ID 
        WHERE m.ID = ?';

    $statement = getPDO()->prepare($collect);  
    $statement->bindValue(1, $member_ID);  
    $result_c = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data_c = $statement->fetchAll();

    if(count($data_c)>0){
        foreach($data_c as $newData){
            $arr_c[] = array(
                'ID'=>$newData['ID'],
                'Email'=>$newData['Email'],
                'Name'=>$newData['Name'],
                'Phone' => $newData['Phone'],
                'BirthDate'=> $newData['BirthDate'],
                'Sex'=> $newData['Sex'],
                'Address'=> $newData['Address'],
                'multiLogin'=> $newData['multiLogin'],
                'point'=> $newData['point'],
                'DishID'=> $newData['DishID'],
                'DishName'=> $newData['DishName'],
                'collectionTime'=> $newData['collectionTime'],
                'TypeName'=> $newData['TypeName']
            );};
        echo json_encode ($arr_c);
    }else{
        echo json_encode ("無資料");
    }

?>