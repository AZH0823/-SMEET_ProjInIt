<?php
    $member_ID = $_POST["member_ID"];

    include('../../conectDB/Connection.php');

    //建立SQL
    $sql = 'select AppointmentDate, d.ID, TotalPrice, `Condition`
    from Orders o
        join OrdersDetail d
        on o.ID = d.ID
    where o.MemberID = ? ';

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $member_ID);  
    $result = $statement->execute();  
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r ($data);
    foreach($data as $newData){
        $arr[] = array(
            'cat' => '商城',
            'date'=>$newData['AppointmentDate'],
            'num'=>$newData['ID'],
            'price'=>$newData['TotalPrice'],
            'statue' => $newData['Condition'],
    );
    echo json_encode ($arr);

    }
?>