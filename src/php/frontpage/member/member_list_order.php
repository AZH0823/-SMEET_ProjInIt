<?php
    $member_ID = $_POST["member_ID"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-預約訂單ORDERS
    $sql = 'select AppointmentDate, ID, TotalPrice, `Condition`
    from Orders 
    where MemberID = ? 
    order by AppointmentDate desc ';

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $member_ID);  
    $result = $statement->execute();  
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r ($data);
    if(count($data)>0){
        foreach($data as $newData){
            $arr[] = array(
                'cat' => '預約',
                'date'=>$newData['AppointmentDate'],
                'num'=>$newData['ID'],
                'price'=>$newData['TotalPrice'],
                'statue' => $newData['Condition'],
        );
        
        }
        echo json_encode ($arr);
    }else{
        echo json_encode ("無資料");
    }
?>