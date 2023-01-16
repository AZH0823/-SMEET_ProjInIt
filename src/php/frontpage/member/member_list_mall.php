<?php
    $member_ID = $_POST["member_ID"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-商城訂單MALLORDERS
    $sql2 = 'select CAST(Date AS DATE) as Date, ID, TotalPrice, State
    from MallOrders
        where MemberID = ?
        order by Date desc';

    $statement2 = getPDO()->prepare($sql2);  
    $statement2->bindValue(1, $member_ID);  
    $result2 = $statement2->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data2 = $statement2->fetchAll();

    foreach($data2 as $newData){
        $arr2[] = array(
            'cat' => '商城',
            'date'=>$newData['Date'],
            'num'=>$newData['ID'],
            'price'=>$newData['TotalPrice'],
            'statue' => $newData['State'],
        );
    
    }
    echo json_encode ($arr2);
?>