<?php
    $member_ID = $_POST["member_ID"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-商城訂單MALLORDERS
    $sql = 'select CAST(Date AS DATE) as Date, ID, TotalPrice, State
    from MallOrders
        where MemberID = ?
        order by Date desc';

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $member_ID);  
    $result = $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    if(count($data)>0){
        foreach($data as $newData){
            $arr[] = array(
                'cat' => '商城',
                'date'=>$newData['Date'],
                'num'=>$newData['ID'],
                'price'=>$newData['TotalPrice'],
                'statue' => $newData['State'],
            );
        
        }
        echo json_encode ($arr);

    }else{
        echo json_encode ("無資料");
    }
    
    
?>