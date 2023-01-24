<?php
    $mall_id = $_POST["mall_id"] ;

    include('../../conectDB/Connection.php');

    //建立SQL-商城訂單MALLORDERS
    $sql = 'SELECT q.`ID`, CAST(q.`Date` AS DATE) as `Date`, `State`, 
    `Payment`, TotalPrice, Points, Invoice, Email, Delivery, `Address`, 
    q.`Name`, Phone, c.qty, c.Price, c.productName, c.Title
    FROM MallOrders q
    join (SELECT m.MallID, m.qty, a.Price, a.`Name` as productName, a.Title
                FROM MallDetail m
                        join (SELECT d.ID, t.`Name` as Title, d.Price, d.`Name`, d.`Type`
                                    FROM Dish d
                                        join DishsType t
                                            on d.`Type` = t.ID) a
                on m.DishID = a.ID) c
        on q.ID = c.MallID
        WHERE q.`ID` = ?';

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