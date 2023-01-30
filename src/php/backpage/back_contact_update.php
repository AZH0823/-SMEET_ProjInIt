<?php // TODO 变数尚未修改

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    //取得POST過來的值
    $Contact_ID = $_POST["Contact_ID"]; //PK
    $Contact_Condition = $_POST['Contact_Condition'] ; //狀態 0:下架, 1:上架,
    
    // echo $QA_ID;
    // echo $QA_Condition;

    // 確認ID
    $selectContact = "SELECT * FROM Contact WHERE ID = :ContactID";
    
    //執行
    $statement = getPDO()->prepare($selectContact);     
    $statement->bindValue(':ContactID', $Contact_ID); 
    $statement->execute();
    $result = $statement -> fetchAll();

    if(count($result) !== 0 ){
        
        // 單筆資料更新
        echo "更新資料".$Contact_ID."</br>";

        // 更新資料
        $updateContact = "UPDATE Contact SET `Condition`
        = :Condition WHERE ID = :ContactID";

        $statement = getPDO()->prepare($updateContact);     
        $statement->bindValue(':Condition', $Contact_Condition); 
        $statement->bindValue(':ContactID', $Contact_ID); 
        $statement->execute();
        $result = $statement -> fetchAll();

        // 檢查更新是否一樣
        $checkedQA = "SELECT * FROM Contact WHERE ID = :ContactID";

        $statement = getPDO()->prepare($checkedContact);     
        $statement->bindValue(':ContactID', $Contact_ID); 
        $statement->execute();
        $checkedResult = $statement -> fetch(); 
        
        // 回傳檢查結果
        if($checkedResult["Condition"] == $Contact_Condition){
            echo '成功'."<br>";

        }else{
            echo '失敗'."<br>";
        }
    }
    else{
        echo "id not exist"."<br>";
    }

?>