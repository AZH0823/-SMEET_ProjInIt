<?php
    include ('../conectDB/Connection.php');
    $ID = $_POST['ID'];
    
    $SelectSetExistSQL ="SELECT * FROM `Sets`
                        WHERE ID  = :ID
                        "; 
    $SelectSetExist = getPDO()->prepare($SelectSetExistSQL);
    $SelectSetExist -> bindValue(":ID",$ID); 
    $SelectSetExist -> execute();
    $SetResult = $SelectSetExist -> fetchAll();

    // echo count($SetResult)."<br>";

    if( count($SetResult) > 0 ){

        // update Set Table
        $SetName = $_POST['SetName'];
        $SetPrice = $_POST['SetPrice'];
        
        // echo $ID."<br>".$SetName."<br>".$SetPrice."<br>";

        $UpdateSetsSQL = "UPDATE `Sets` 
        SET `SetName` = :SetName,
            `SetPrice` = :SetPrice
        WHERE ID = :ID";


        $UpdateSetDatail = getPDO()->prepare($UpdateSetsSQL);
        $UpdateSetDatail -> bindValue(":SetName",$SetName); 
        $UpdateSetDatail -> bindValue(":SetPrice",$SetPrice); 
        $UpdateSetDatail -> bindValue(":ID",$ID); 
        $UpdateSetDatail -> execute();
        $SetDatailResult = $UpdateSetDatail -> fetchAll();

        
        // update Set Dish Table  
        

        $SelectSetOK ="SELECT * FROM `Sets`
        WHERE ID  = :ID AND
              SetName = :SetName AND
              SetPrice = :SetPrice
        "; 

        $SelectSetUpdateOK = getPDO()->prepare($SelectSetOK);
        $SelectSetUpdateOK -> bindValue(":SetName",$SetName); 
        $SelectSetUpdateOK -> bindValue(":SetPrice",$SetPrice); 
        $SelectSetUpdateOK -> bindValue(":ID",$ID); 
        $SelectSetUpdateOK -> execute();
        $SelectSetResult = $SelectSetUpdateOK -> fetchAll();
    
        if( count($SelectSetResult) > 0){
            $DishData = $_POST['DishData'];
            // echo $DishData;
            if($DishData !== 'NoSetDishIsEditData' ){
                    
                    foreach($DishData as $index => $row){
                    $Dish_ID = $row["id"];
                    $Name = $row["dishName"];
                    $Condition = $row["Condition"];
                    // echo $ID."<br>".$Name."<br>".$Condition."<br>";
                    
                    $UpdateDishSQL = "UPDATE Dish
                    SET 
                        `Name` = :Name,
                        `Condition` = :Condition,
                        `pushisedDate` = NOW() 
                    WHERE ID = :Dish_ID;";


                    $UpdateDishConditionStatement = getPDO()->prepare($UpdateDishSQL);
                    $UpdateDishConditionStatement -> bindValue(":Name",$Name); 
                    $UpdateDishConditionStatement -> bindValue(":Condition",$Condition); 
                    $UpdateDishConditionStatement -> bindValue(":Dish_ID",$Dish_ID); 
                    $UpdateDishConditionStatement -> execute();
                    $UpdateDishConditionResult = $UpdateDishConditionStatement -> fetchAll();
                }
            }
            
            echo "Sucessful";
        }else{
            echo "fail";
        }
    }else{
        echo 'ID not Exit';
    }
?>