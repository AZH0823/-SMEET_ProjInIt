<?php
    include ('../conectDB/Connection.php');

    $TotalPrice = $_POST["TotalPrice"];
    $Points = $_POST["Points"];
    $Invoice = $_POST["invoice"];
    $Email = $_POST["Email"];
    $addr = $_POST["addr"];
    $MemberID = $_POST["MemberID"];
    $Name = $_POST["name"];
    $Phone = $_POST["phone"];
    // $Uniform = $_POST["uniform"];
    
    

    //建立SQL
    $cartDetail = 'INSERT INTO MallOrders
    (`Date`,`State`,
    `Payment`, `TotalPrice`,     
    `Points`,`Invoice`,`Email`,`Delivery`,
    `Address`,`MemberID`,`Name`,`Phone`)
    values(now(),"訂單成立已付款","信用卡",
    ?,?,?,?,
    "宅配",?,?,?,?)';


    // echo $TotalPrice."<br>";
    // echo $Points."<br>";

//     $cartDetail = " INSERT INTO MallOrders ( `Date`, `State`, `Payment`, `TotalPrice`, 
// 	`Points`, `Invoice`, `Email`, `Delivery`, `Address`, `MemberID`, `Name`, `Phone`) 
//  values(now(),'訂單成立已付款','信用卡',1500,25,'CV12345678','cba123@gmail.com',
// 			'宅配','新北市三重區中正北路16號4樓',8,'江旂','0988656321')";

  $dbn =  getPDO();


    $statement = $dbn -> prepare($cartDetail);
    $statement->bindValue(1, $TotalPrice);  
    $statement->bindValue(2, $Points);  
    $statement->bindValue(3, $Invoice);  
    $statement->bindValue(4, $Email);  
    $statement->bindValue(5, $addr);  
    $statement->bindValue(6, $MemberID);  
    $statement->bindValue(7, $Name);  
    $statement->bindValue(8, $Phone);  
    // $statement->bindValue(9, $Uniform);  
    $result = $statement->execute();
    //lastInsertId是insert資料後取得最新的一筆id的編號
    $OrderID = $dbn->lastInsertId();
    echo  $OrderID;
 

?>

