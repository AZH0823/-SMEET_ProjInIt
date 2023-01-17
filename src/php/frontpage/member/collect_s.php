<?php
   
    $member_ID = $_POST['member_ID'];
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
       $sql = "select f.ID, DishID, Name, Price, IMG, Member_ID
                from FavoriteLists f
                    join Dish d
                        on f.DishID = d.ID
                where Member_ID = ?
                order by collectionTime desc";
       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $member_ID);  
       $result = $statement->execute();  

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
        // print_r ($data);
    //    echo json_encode($data);
           foreach($data as $newData){
                $arr[] = array(
                    'ID'=>$newData['ID'],
                    'DishID'=>$newData['DishID'],
                    'Name'=>$newData['Name'],
                    'Price'=>$newData['Price'],
                    'IMG' => $newData['IMG']
            );
        }
        echo json_encode ($arr);
       
?>