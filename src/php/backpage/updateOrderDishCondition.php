<?php
    include ('../conectDB/Connection.php');
    
    // MSG 1.單品("") 2.單品詳細編輯(DishDetailUpdate) 3. 單品新增("insertDish")
    $MSG = $_POST["MSG"];
    if($MSG == ""){
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
            $updateOrderDishConditionSQL = "UPDATE Dish 
            SET `Condition` = :Condition,
                `pushisedDate` = NOW()
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
                echo 'sucessful';
            }else{
                echo 'fail';
            }
        }else{
            echo "id not exist";
        }
    }else if($MSG ==="DishDetailUpdate") {
        $DishID = $_POST["ID"];
        $Name = $_POST["Name"];
        $price =$_POST["price"];
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
            
            // echo '更新單品及服務項目:::'.$DishID."<br>";
            // echo '更新單品及服務項目:::'.$Name."<br>";
            // echo '更新單品及服務項目:::'.$price."<br>";
            // echo '更新單品及服務項目:::'.$Condition."<br>";

            $updateOrderDishDetailSQL = "UPDATE Dish 
            SET 
                `Name` = :Name,
                `price` = :price,
                `Condition` = :Condition,
                `pushisedDate` = NOW()
            WHERE ID = :DishID";

            $thisID_DishDetailUpdate = getPDO()->prepare($updateOrderDishDetailSQL);
            $thisID_DishDetailUpdate -> bindValue(':Name', $Name);
            $thisID_DishDetailUpdate -> bindValue(':price', $price);
            $thisID_DishDetailUpdate -> bindValue(':Condition', $Condition);
            $thisID_DishDetailUpdate -> bindValue(':DishID', $DishID);
            $thisID_DishDetailUpdate -> execute();
            $result = $thisID_DishDetailUpdate -> fetchAll();

        
            // 檢查更新是否一樣
            $checkUpdateResultSQL = "SELECT * 
            FROM Dish
            where `ID` = :DishID and 
                  `Name` = :Name and 
                  `price` = :price and 
                  `Condition` = :Condition";

            $checkUpdateResultSQL = getPDO()->prepare($checkUpdateResultSQL);
            $checkUpdateResultSQL -> bindValue(':Name', $Name);
            $checkUpdateResultSQL -> bindValue(':price', $price);
            $checkUpdateResultSQL -> bindValue(':Condition', $Condition);
            $checkUpdateResultSQL -> bindValue(':DishID', $DishID);
            $checkUpdateResultSQL -> execute();
            $checkresult = $checkUpdateResultSQL -> fetch();

        
            if( count($checkresult) !==0){
                echo 'sucessful';
            }else{
                echo 'fail';
            }



        }else{
            echo "id not exist";
        }


    }
   

?>