<?php // TODO 变数尚未修改

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    //取得POST過來的值
    $QA_ID = $_POST["QA_ID"]; //PK
    $QA_Condition = $_POST['QA_Condition'] ; //狀態 0:下架, 1:上架,
    
    // echo $QA_ID;
    // echo $QA_Condition;

    // 確認ID
    $selectQA = "SELECT * FROM QA WHERE ID = :QAID";
    
    //執行
    $statement = getPDO()->prepare($selectQA);     
    $statement->bindValue(':QAID', $QA_ID); 
    $statement->execute();
    $result = $statement -> fetchAll();

    if(count($result) !== 0 ){
        
        // 單筆資料更新
        echo "更新資料".$QA_ID."</br>";

        // 更新資料
        $updateQA = "UPDATE QA SET `Condition`
        = :Condition WHERE ID = :QAsID";

        $statement = getPDO()->prepare($updateQA);     
        $statement->bindValue(':Condition', $QA_Condition); 
        $statement->bindValue(':QAsID', $QA_ID); 
        $statement->execute();
        $result = $statement -> fetchAll();

        // 檢查更新是否一樣
        $checkedQA = "SELECT * FROM QA WHERE ID = :QAID";

        $statement = getPDO()->prepare($checkedQA);     
        $statement->bindValue(':QAID', $QA_ID); 
        $statement->execute();
        $checkedResult = $statement -> fetch(); 
        
        // 回傳檢查結果
        if($checkedResult["Condition"] == $QA_Condition){
            echo '成功'."<br>";

        }else{
            echo '失敗'."<br>";
        }
    }
    else{
        echo "id not exist"."<br>";
    }

?>