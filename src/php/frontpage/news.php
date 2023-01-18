<?php
include("../conectDB/Connection.php");

//建立sql語法
$sql = "select * FROM News";
$statement = getPDO()->prepare($sql);
// $statement = bindValue(1, "abc123@gmail.com");
// $statement = bindValue(2, "abc123");
$statement->execute();

$data = $statement->fetchAll();
print_r($data)

?>