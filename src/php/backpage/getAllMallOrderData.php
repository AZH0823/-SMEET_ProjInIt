<?php

    include ('../conectDB/Connection.php');

     $getID = @$_GET['ID'];

    if(!isset($getID)){
    $orderData = "SELECT m.ID, Date, State, Payment,TotalPrice,Points,Invoice,Email,Delivery,Address,MemberID,Name,Phone,d.MallID,d.qty, d.price, d.DishID
    from MallOrders m
    right join MallDetail d
    on m.ID = d.MallID
    order by  m.ID;";

    $Searhstatement = getPDO()->prepare($orderData);
    $Searhstatement -> execute();
    $searchData = $Searhstatement -> fetchAll();
    // echo json_encode($searchData);
    $arr=array();
    foreach($searchData as $newData){
        //幫arr裡面的key換名字
    $arr[] = array(
        'ID'=>$newData['ID'],
        'Date' => $newData['Date'],
        'MemberID' => $newData['MemberID'],
        'TotalPrice'=>$newData['TotalPrice'],
        'State'=> $newData['State'],
        'Invoice'=> $newData['Invoice'],
        'Delivery'=> $newData['Delivery'],
        'Points'=> $newData['Points'],
        'Name'=> $newData['Name'],
        'Phone'=> $newData['Phone'],
        'Email'=> $newData['Email'],
        'Address'=> $newData['Address'],
        'qty'=> $newData['qty'],
        'price'=> $newData['price'],
        'DishID'=>$newData['DishID'],
        );}

        echo json_encode($arr);  
    }esle{

        $MallListDetail = "";
    }





?>
