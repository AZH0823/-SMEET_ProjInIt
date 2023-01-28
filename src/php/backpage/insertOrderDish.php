<?php
    include ('../conectDB/Connection.php');

    $MSG = $_POST["MSG"];
    if($MSG == "oneData"){
        $Name = $_POST["dishName"];
        $Price = $_POST["price"];
        $Type = $_POST["Type"];
        $Introduction =  $_POST["Introduction"];
        // echo $Name.'<br>'. $price.'<br>'.$Type.'<br>'.$Introduction.'<br>';

        $insertDishSQL = "INSERT INTO Dish (`Type`, `Name`, `Price`, 
                `Condition`,`pushisedDate`,`ProductType`,Introduction) VALUES
                ( :Type, :Name, :Price, 1, NOW(), '私廚單點',:Introduction)
        ";
        $insertDishStatement = getPDO()->prepare($insertDishSQL);
        $insertDishStatement->bindValue(':Type', $Type); 
        $insertDishStatement->bindValue(':Name', $Name); 
        $insertDishStatement->bindValue(':Price', $Price); 
        $insertDishStatement->bindValue(':Introduction', $Introduction); 
        $insertDishStatement -> execute();
       
       
        $getDishID = "SELECT ID from Dish
                      ORDER BY ID desc
                      LIMIT 1";

        $getDishID = getPDO()->prepare($getDishID);
        $getDishID -> execute();
        $DishID = $getDishID->fetch();

        // 得到訂單編號
        $DishID = $DishID['ID'];
        echo $DishID;
    }

?>