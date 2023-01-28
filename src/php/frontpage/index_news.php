<?php

    include("../conectDB/Connection.php");

    //建立sql語法
    $sql = "SELECT `date`, `Article`, `Condition`
    FROM News
    where `Condition` = 1
    
    limit 5";

    $statement = getPDO()->prepare($sql);

    $statement->execute(); //執行上面的

    $data = $statement->fetchAll();//這邊是拿回來的資料

    echo json_encode($data); //更改成json格式

?>