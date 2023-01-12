<?php
  include ('../conectDB/Connection.php');
  //  撈全部單品資訊

  $SearhDishSql = "SELECT d.id as id, d.`Name` as disName,dt.`Name`as dishType, d.price 
  FROM smeet.Dish d
      join smeet.DishsType dt
          on d.`type` = dt.ID
  where d.ProductType = '私廚單點' and dt.`Name`= '單品'";
  // 將include Connection Fuction 給引出
  $Searhstatement = getPDO()->prepare($SearhDishSql);
  $Searhstatement -> execute();

 
  $searchData = $Searhstatement -> fetchAll();
  $arr=array();
  foreach($searchData as $newData){
     $arr[] = array(
                'id'=>$newData['id'],
                'disName' => $newData['disName'],
                'dishType'=>$newData['dishType'],
                'price'=> $newData['price']
     );
   }

  echo json_encode($arr);
?>