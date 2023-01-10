<?php
    include ('../conectDB/Connection.php');

    //  單撈一筆
    //  $keyword =$_GET["id"];  
    //  $SearhDishSql = " SELECT * FROM `Dish` where id = ? ";

    //  撈全部
    $SearhDishSql = " SELECT * FROM `Dish`";
    // 將include Connection Fuction 給引出
    $Searhstatement = getPDO()->prepare($SearhDishSql);

    // 單筆
    //  $Searhstatement -> bindValue(1,$keyword); 
    $Searhstatement -> execute();

 
    $searchData = $Searhstatement -> fetchAll();

    // 吐回給ajax
    echo json_encode($searchData);

?>