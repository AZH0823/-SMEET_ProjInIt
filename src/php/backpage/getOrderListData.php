<?php
    include ('../conectDB/Connection.php');
    
    
    $dataListSQL = "SELECT `ID`,`AppointmentDate`,`MemberID`,`TotalPrice`,`Count`,`Condition` FROM Orders
                    order by ID ";

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
                   'Condition'=> $newData['Condition']
        );
      }
   
    

      
     echo json_encode($arr);
?>