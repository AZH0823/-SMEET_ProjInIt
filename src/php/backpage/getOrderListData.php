<?php
    include ('../conectDB/Connection.php');
    
    $getID = @$_GET['ID'];
    
    // 撈全部資料
  if(!isset($getID)){
      $dataListSQL = "SELECT 
      o.`ID`,`AppointmentDate`,`MemberID`,`TotalPrice`,
      `Count`,`Condition`,`Scheduled`,`point`,
      `Name`,`Phone`,`Email`,`Address`,`notes` ,t.`LederName`
      FROM Orders o
      LEFT JOIN Teams t
      ON o.TeamID = t.ID
      order by o.ID;  ";

      $Searhstatement = getPDO()->prepare($dataListSQL);
      $Searhstatement -> execute();
      $searchData = $Searhstatement -> fetchAll();


      $arr=array();
      foreach($searchData as $newData){
      $arr[] = array(
          'ID'=>$newData['ID'],
          'AppointmentDate' => $newData['AppointmentDate'],
          'MemberID' => $newData['MemberID'],
          'TotalPrice'=>$newData['TotalPrice'],
          'Count'=> $newData['Count'],
          'Condition'=> $newData['Condition'],
          'Scheduled'=> $newData['Scheduled'],
          'point'=> $newData['point'],
          'Name'=> $newData['Name'],
          'Phone'=> $newData['Phone'],
          'Email'=> $newData['Email'],
          'Address'=> $newData['Address'],
          'notes'=> $newData['notes'],
          'LederName'=> $newData['LederName'],
      );}
    echo json_encode($arr);      
  }else{
    // 單筆訂單明細

    $OderListDetailSQL ="SELECT O.OrderID,DishID,DishName,DTName,qty,price FROM OrdersDetail O
    JOIN (SELECT d.ID ,D.`Type`, d.`Name`as DishName ,dt.`Name` as DTName 
        FROM Dish d JOIN DishsType dt
          ON d.Type = dt.ID) as D
    ON O.DishID = D.ID 
    where O.OrderID = :getID AND D.`DTName` != '商城甜品'
    order by D.`Type` asc ";

    $Searhstatement = getPDO()->prepare($OderListDetailSQL);
    $Searhstatement -> bindValue(':getID',$getID); 
    $Searhstatement -> execute();

    $result = $Searhstatement -> fetchAll();

    $arr=array();
    foreach($result as $newData){
      $arr[] = array(
          'OrderID'=>$newData['OrderID'],
          'DishID'=>$newData['DishID'],
          'DishName'=>$newData['DishName'],
          'DtName'=>$newData['DTName'],
          'qty'=>$newData['qty'],
          'price'=>$newData['price']
         
      );}
    echo json_encode($arr); 

//     <!-- SELECT * FROM OrdersDetail O
// JOIN (SELECT d.ID, d.`Name`as DishName ,dt.`Name` as DTName 
// 	  FROM Dish d JOIN DishsType dt
//       ON d.Type = dt.ID) as D
// ON O.DishID = D.ID 
// where O.OrderID = 1 AND D.`DTName` != '商城甜品';
//  -->
  }
  
?>