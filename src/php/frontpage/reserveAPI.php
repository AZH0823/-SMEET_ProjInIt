<?php
 include ('../conectDB/Connection.php');

 // echo $pdo;

 $SearhDishSql = " SELECT * FROM `Dish`";
 $Searhstatement = getPDO()->prepare($SearhDishSql);
 $Searhstatement -> execute();

 
 $searchData = $Searhstatement -> fetchAll();

 echo json_encode($searchData);

?>