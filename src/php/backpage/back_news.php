<?php
include("../conectDB/Connection.php");

//建立sql語法
$sql = "select * FROM News";
$statement = getPDO()->prepare($sql);
$statement->execute(); //執行上面的
// $statement = bindValue(1, "abc123@gmail.com");
// $statement = bindValue(2, "abc123");

$data = $statement->fetchAll();//這邊是拿回來的資料
echo json_encode($data); //更改成json格式

?>