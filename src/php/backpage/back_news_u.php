<?php // TODO 变数尚未修改

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    //取得POST過來的值
    $News_ID = $_POST["News_ID"]; //PK
    $News_Condition = $_POST['News_Condition'] ; //狀態 0:下架, 1:上架,

    // 確認ID
    $selectNews = "SELECT * FROM News WHERE ID = :NewsID";
    
    //執行
    $statement = getPDO()->prepare($selectNews);     
    $statement->bindValue(':NewsID', $News_ID); 
    $statement->execute();
    $result = $statement -> fetchAll();

    if(count($result) !== 0 ){
        // 單筆資料更新
        echo "更新資料".$News_ID."</br>";

        // 更新資料
        $updateNews = "UPDATE News SET `Condition`
        = :Condition WHERE ID = :NewsID";

        $statement = getPDO()->prepare($updateNews);     
        $statement->bindValue(':Condition', $News_Condition); 
        $statement->bindValue(':NewsID', $News_ID); 
        $statement->execute();
        $result = $statement -> fetchAll();

        // 檢查更新是否一樣
        $checkedNews = "SELECT * FROM News WHERE ID = :NewsID";

        $statement = getPDO()->prepare($checkedNews);     
        $statement->bindValue(':NewsID', $News_ID); 
        $statement->execute();
        $checkedResult = $statement -> fetch(); // TODO 為啥是fetch?
        
        // 回傳檢查結果
        if($checkedResult["Condition"] == $News_Condition){
            echo '成功'."<br>";

        }else{
            echo '失敗'."<br>";
        }
    }else{
        echo "id not exist"."<br>";
    }

?>