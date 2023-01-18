<?php
    $reserve_id = $_POST["reserve_id"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-商城訂單MALLORDERS
    $sql = 'select o.ID, AppointmentDate, o.Name, Count, `Condition`, Scheduled, o.Address, Date, TotalPrice, notes, o.point, Email, Phone, SetPrice, SetName, qty, Type, d.Name, TypeName
    from Orders o
    join Sets s
        on o.SetID = s.ID 
    join (select OrderID, qty, Type, Name, d.TypeName
                from OrdersDetail o 
                join (SELECT t.Name as TypeName, Type, d.Name , d.ID
							FROM dish d
								join DishsType t
									on d.Type = t.ID) d 
                on o.DishID = d.ID ) d
            on o.ID = d.OrderID
    where o.ID = ?';

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $reserve_id);  
    $result = $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r ($data);
    foreach($data as $newData){
        $arr[] = array(
            'ID' =>$newData['ID'],
            'AppointmentDate'=>$newData['AppointmentDate'],
            'Name'=>$newData['2'],
            'Count'=>$newData['Count'],
            'Condition' => $newData['Condition'],
            'Scheduled' => $newData['Scheduled'],
            'Address' => $newData['Address'],
            'Date' => $newData['Date'],
            'TotalPrice' => $newData['TotalPrice'],
            'notes' => $newData['notes'],
            'point' => $newData['point'],
            'Email' => $newData['Email'],
            'Phone' => $newData['Phone'],
            'SetPrice' => $newData['SetPrice'],
            'SetName' => $newData['SetName'],
            'qty' => $newData['qty'],
            'Type' => $newData['Type'],
            'dishName' => $newData['17'],
            'TypeName' => $newData['TypeName'],
        );
    
    }
    echo json_encode ($arr);
?>