<?php
  include ('../conectDB/Connection.php');

  //  撈除所有服務
  $SearhDishSql = "SELECT d.id,d.`Name`,d.Price,d.Introduction
  FROM smeet.Dish d
        join smeet.DishsType dt
            on d.`type` = dt.ID
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