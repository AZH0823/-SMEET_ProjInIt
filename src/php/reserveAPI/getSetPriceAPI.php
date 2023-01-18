<?php
 include ('../conectDB/Connection.php');

 //  撈除所有服務
 $SearhDishSql = "SELECT ID,SetName,SetPrice,IMG FROM Sets";

 $Searhstatement = getPDO()->prepare($SearhDishSql);
 $Searhstatement -> execute();
 $searchData = $Searhstatement -> fetchAll();

 $arr=array();
  foreach($searchData as $newData){
     $arr[] = array(
                'id'=>$newData['ID'],
                'setName' => $newData['SetName'],
                'price'=>$newData['SetPrice'],
                'IMG'=> $newData['IMG']
     );
   }

  echo json_encode($arr);

// Select id, setname,SetPrice,IMG from smeet.sets 
?>