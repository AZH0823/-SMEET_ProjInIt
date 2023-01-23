<?php

    $xxxxx = $_POST['?????'];
    $zzzzz = $_POST['?????'];
        
    include('../../conectDB/Connection.php');

//---------------------------------------------------

   //建立SQL語法-取得會員資訊
    $sql = "select o.ID,o.AppointmentDate,t.LederName from orders o
    join Teams t
    on o.TeamID = t.ID
    WHERE o.AppointmentDate BETWEEN ? AND ? 
    order by o.AppointmentDate;"; // 第一個 ？ = 當下時間  第二個 ？ = 當下時間 + 60天  
    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $xxxxx);  
    $statement->bindValue(2, $zzzzz);  
    $result = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
        // print_r ($data);
    //    echo json_encode($data);
    if(count($data)>0){
        foreach($data as $newData){
            $arr[] = array(
                'ID'=>$newData['ID'],
                'Name'=>$newData['LederName'],
                'time'=>$newData['AppointmentDate'],
        );
    }
    echo json_encode ($arr);

    }else{
        echo json_encode ("無資料");
    }
    


?>