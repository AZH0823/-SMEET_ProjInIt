<?php
    $mall_id = $_POST["mall_id"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-商城訂單MALLORDERS
    $sql = 'select m.ID, CAST(Date AS DATE) as Date, State, Payment, TotalPrice, Points, Invoice, Email, Delivery, Address, m.Name, Phone, qty, Price, productName, Title
            from MallOrders m
            join (select m.MallID, m.qty, d.Price, d.Name as productName, d.Title
                        from MallDetail m
                                join (select d.ID, t.Name as Title, d.Price, d.Name, d.Type
                                            from dish d
                                                join DishsType t
                                                    on d.Type = t.ID) d
                        on m.DishID = d.ID) d
                on m.ID = d.MallID
                where m.ID = ?';

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $mall_id);  
    $result = $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r ($data);
    foreach($data as $newData){
        $arr[] = array(
            'ID' =>$newData['ID'],
            'Date'=>$newData['Date'],
            'State'=>$newData['State'],
            'Payment'=>$newData['Payment'],
            'TotalPrice' => $newData['TotalPrice'],
            'Points' => $newData['Points'],
            'Invoice' => $newData['Invoice'],
            'Email' => $newData['Email'],
            'Delivery' => $newData['Delivery'],
            'Address' => $newData['Address'],
            'Name' => $newData['Name'],
            'Phone' => $newData['Phone'],
            'qty' => $newData['qty'],
            'Price' => $newData['Price'],
            'productName' => $newData['productName'],
            'Title' => $newData['Title']
        );
    
    }
    echo json_encode ($arr);
?>