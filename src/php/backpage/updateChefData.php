<?php // TODO 变数尚未修改

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    //取得POST過來的值
    $Teams_ID = $_POST["Teams_ID"]; 
    $Teams_LederName = $_POST["Teams_LederName"]; 
    $Teams_LederProfile = $_POST["Teams_LederProfile"];

    // echo $Teams_LederName;
    // echo "<br>";
    // echo $Teams_LederProfile;
    // echo "<br>";


    // 確認ID
    $selectTeams = "SELECT * FROM Teams WHERE ID = :TeamsID";
    
    //執行
    $statement = getPDO()->prepare($selectTeams);     
    $statement->bindValue(':TeamsID', $Teams_ID); 
    $statement->execute();
    $result = $statement -> fetchAll();

    if(count($result) !== 0 ){
        
        // 單筆資料更新
        // echo "更新資料".$Teams_ID."</br>";

        // 更新資料
        $updateTeams = "UPDATE Teams SET 
            `LederName`= :LederName,
            `LederProfile`= :LederProfile
        WHERE ID = :TeamsID";

    // $Teams_ID = $_POST["Teams_ID"]; 
    // $Teams_Teams_LederName = $_POST["Teams_LederName"]; 
    // $Teams_LederProfile = $_POST["Teams_LederProfile"]; 


        $statement = getPDO()->prepare($updateTeams);     
        $statement->bindValue(':LederName', $Teams_LederName); 
        $statement->bindValue(':LederProfile', $Teams_LederProfile); 
        $statement->bindValue(':TeamsID', $Teams_ID); 
        $statement->execute();
        $result = $statement -> fetchAll();

        // 檢查更新是否一樣
        $checkedTeams = "SELECT * FROM Teams WHERE ID = :Teams_ID";

        $statement = getPDO()->prepare($checkedTeams);     
        $statement->bindValue(':Teams_ID', $Teams_ID); 
        $statement->execute();
        $checkedResult = $statement -> fetch(); 
        
        // 回傳檢查結果
        if($checkedResult["ID"] == $Teams_ID){
            echo 'successfull';

        }else{
            echo 'fail';
        }
    }
    else{
        echo "id not exist";
    }

?>