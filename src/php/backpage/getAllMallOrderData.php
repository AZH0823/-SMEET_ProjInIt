<?php

    include ('../conectDB/Connection.php');

     $getID = @$_GET['ID'];

    if(!isset($getID)){
    $orderData = "select * from MallOrders;";

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
        // 'qty'=> $newData['qty'],
        // 'price'=> $newData['price'],
        // 'DishID'=>$newData['DishID'],
        );}

        echo json_encode($arr);  
    // }else{

    //     $MallListDetail ="select * from MallDetail as M
    //     join (SELECT d.ID ,D.`Type`, d.`Name`as DishName ,dt.`Name` as DTName 
    //             FROM Dish d JOIN DishsType dt
    //               ON d.Type = dt.ID
    //                order by dt.ID asc) as B
    //         on M.DishID = B.ID
    //         having MallID = :getID ;";

    //     $Searhstatement = getPDO()->prepare($MallListDetail);
    //     $Searhstatement -> bindValue(':getID',$getID); 
    //     $Searhstatement -> execute();

    //     $result = $Searhstatement -> fetchAll();
    //     echo json_encode($result); 
    //     $arr=array();
    //     foreach($result as $newData){
    //     $arr[] = array(
    //         'ID'=>$newData['ID'],
    //         'MallID'=>$newData['MallID'],
    //         'DishName'=>$newData['DishName'],
    //         'DtName'=>$newData['DTName'],
    //         'qty'=>$newData['qty'],
    //         'price'=>$newData['price']
            
    //     );}
    //         echo json_encode($arr); 
    }





?>
