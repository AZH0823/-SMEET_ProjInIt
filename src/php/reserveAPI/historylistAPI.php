

<?php
    include ('../conectDB/Connection.php');
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    
    $date = $decoded['date'];
    // if(empty($date))return

    // echo $date;
    $historySQL ="SELECT O.ID as OrderID,O.AppointmentDate,T.team as teams, T.ID as TeamID FROM 
    Orders O join Teams T  
    on O.TeamID = T.ID
    WHERE  O.AppointmentDate = :date";

    $historyStatement = getPDO()->prepare($historySQL);
    $historyStatement -> bindValue(":date", $date);
    $historyStatement -> execute();
    $historySQLResult = $historyStatement -> fetchAll();

    $arr=array();
    foreach($historySQLResult as $newData){
        $arr[] = array(
                   'OrderID'=>$newData['OrderID'],
                   'AppointmentDate' => $newData['AppointmentDate'],
                   'teams'=>$newData['teams'],
                   'TeamID'=> $newData['TeamID']
        );
      }
   
    

      
     echo json_encode($arr);
?>