<?php
    include ('../conectDB/Connection.php');
    
    // post 資料
    $DishID = $_POST["ID"];
    $Condition = $_POST["Condition"];

    // 搜尋是否此ID資料
    $selectDishExistSQL = "SELECT * 
        FROM Dish
        where ID = :DishID ";
        
    $DishIDexist = getPDO()->prepare($selectDishExistSQL);
    $DishIDexist->bindValue(':DishID', $DishID);
    $DishIDexist -> execute();
    $result = $DishIDexist -> fetchAll();


    if( count($result) !==0){
        // 單筆資料更新
        echo "更新資料".$DishID."<br>";

        // 更新資料
        $updateOrderDishConditionSQL = "UPDATE Dish 
        SET `Condition` = :Condition
        WHERE ID = :DishID";

        $thisID_DishConditionUpdate = getPDO()->prepare($updateOrderDishConditionSQL);
        $thisID_DishConditionUpdate -> bindValue(':Condition', $Condition);
        $thisID_DishConditionUpdate -> bindValue(':DishID', $DishID);
        $thisID_DishConditionUpdate -> execute();
        $result = $thisID_DishConditionUpdate -> fetchAll();

       
        // 檢查更新是否一樣
        $checkUpdateResultSQL = "SELECT * 
        FROM Dish
        where ID = :DishID ";

        $checkUpdateResultSQL = getPDO()->prepare($checkUpdateResultSQL);
        $checkUpdateResultSQL -> bindValue(':DishID', $DishID);
        $checkUpdateResultSQL -> execute();
        $checkresult = $checkUpdateResultSQL -> fetch();

        // 檢查回傳結果
        if($checkresult["Condition"] ==  $Condition){
            echo 'sucessful'."<br>";
        }else{
            echo 'fail:'."<br>";
        }
    }else{
        echo "id not exist:"."<br>";
    }

?>