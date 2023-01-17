<?php
  include ('../conectDB/Connection.php');

  //  撈除所有服務
  $SearhDishSql = "SELECT d.id, d.`Name`, d.Price, d.Introduction
  FROM dish d
        join DishsType dt
            on d.`Type` = dt.ID
  where type = 11";

  $Searhstatement = getPDO()->prepare($SearhDishSql);
  $Searhstatement -> execute();
  $searchData = $Searhstatement -> fetchAll();
  
  $arr=array();
  foreach($searchData as $newData){
     $arr[] = array(
                'id'=>$newData['id'],
                'title' => $newData['Name'],
                'price'=>$newData['Price'],
                'desc'=> $newData['Introduction']
     );
   }

  echo json_encode($arr);

?>