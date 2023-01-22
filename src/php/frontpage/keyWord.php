<?php
include ('../conectDB/Connection.php');

// echo "123";


$keyWord = $_POST["Search"];



//  //建立SQL
//  $keyWord = 'select * from News where Article like ? ';
 $keyWord = 'select * from News where Article like ? ';
 echo $keyWord;

$statement = getPDO() ->prepare($keyWord);
$statement->bindValue(1,$account);
$result = $statement->execute();


// 抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();




?>