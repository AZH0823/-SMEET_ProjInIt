<?php // TODO 变数尚未修改

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    //取得POST過來的值
    $dish_ID = $_POST["dish_ID"]; //PK
    $dish_Condition = $_POST['dish_Condition'] ; //狀態 0:下架, 1:上架,

    // 確認ID
    $selectDish = "SELECT * FROM Dish WHERE ID = :DishID";
    
    //執行
    $statement = getPDO()->prepare($selectDish);     
    $statement->bindValue(':DishID', $dish_ID); 
    $statement->execute();
    $result = $statement -> fetchAll();

    if(count($result) !== 0 ){
        // 單筆資料更新
        echo "更新資料".$dish_ID."</br>";

        // 更新資料
        $updateDish = "UPDATE Dish SET `Condition`
        = :Condition WHERE ID = :DishID";

        $statement = getPDO()->prepare($updateDish);     
        $statement->bindValue(':Condition', $dish_Condition); 
        $statement->bindValue(':DishID', $dish_ID); 
        $statement->execute();
        $result = $statement -> fetchAll();

        // 檢查更新是否一樣
        $checkedDish = "SELECT * FROM Dish WHERE ID = :DishID";

        $statement = getPDO()->prepare($checkedDish);     
        $statement->bindValue(':DishID', $dish_ID); 
        $statement->execute();
        $checkedResult = $statement -> fetch(); // TODO 為啥是fetch?
        
        // 回傳檢查結果
        if($checkedResult["Condition"] == $dish_Condition){
            echo '成功'."<br>";

        }else{
            echo '失敗'."<br>";
        }
    }else{
        echo "id not exist"."<br>";
    }

?>