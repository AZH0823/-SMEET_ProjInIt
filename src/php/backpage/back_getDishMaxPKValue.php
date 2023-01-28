<?php
    include ('../conectDB/Connection.php');
    $MaxPKValueSQL = "SELECT MAX(ID) as DishID FROM Dish";
    $Searhstatement = getPDO()->prepare($MaxPKValueSQL);
    $Searhstatement -> execute();
    $SearchResult =  $Searhstatement ->fetch();

    $MaxID = $SearchResult[0];
    echo $MaxID;
?>