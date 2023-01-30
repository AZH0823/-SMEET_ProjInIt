<?php
    $Email = trim($_POST['Email'] ) ;
    
    include('../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $check = 'SELECT Email FROM Member 
    WHERE Email = ?';

    $statement = getPDO()->prepare($check);  
    $statement->bindValue(1, $Email);  
    $result = $statement->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if($data){
        //有此帳號===============
        // echo "Y";
        $sql = 'SELECT `ID`, `Email`, `Password` 
        FROM Member WHERE Email = ?';

        $statement1 = getPDO()->prepare($sql);  
        $statement1->bindValue(1, $Email);  
        $result1 = $statement1->execute();
        $data1 = $statement1->fetchAll();
        foreach($data1 as $index => $row ){
            $user_ID = $row['ID'];
            $account = $row['Email'];
            $pwd = $row['Password'];
        };
        // echo $user_ID;
        // echo $account;
        // echo $pwd;
        // 驗證碼
        $token = md5($user_ID.$account.$pwd);
        // echo $token;
        // 把token 塞進table===========
        $update = 'UPDATE Member SET `multiLogin` = ? WHERE `ID` = ? ';

        $statement2 = getPDO()->prepare($update);  
        $statement2->bindValue(1, $token);  
        $statement2->bindValue(2, $user_ID);  
        $result2 = $statement2->execute();
        $data2 = $statement2->fetchAll();

        // 寄email 到信箱===============
        // 把token回傳到前端寄email
        echo $token;
    }else{
        //沒有此帳號
        echo "N";
    }



?>