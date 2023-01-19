<?php
  include ('../conectDB/Connection.php');
  //  撈全部單品資訊

  $SearhDishSql = "SELECT  d.ID AS id, d.`Name` AS disName,dt.`Name`AS dishType, d.Price
  FROM Dish  d
       JOIN DishsType dt
           ON d.`Type` = dt.ID
  WHERE d.ProductType = '私廚單點' AND dt.`Name`= '單品' AND d.Condition ='1' ";
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
                'price'=> $newData['Price']
     );
   }

  echo json_encode($arr);
?>