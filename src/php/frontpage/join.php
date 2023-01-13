<?php
    $account = htmlentities( $_POST["account"]);
    $pwd = htmlspecialchars( $_POST["pwd"] );

    include('../conectDB/Connection.php');

    //建立SQL
    $check = 'SELECT Email FROM Member
    where Email = ? ';

    $statement = getPDO()->prepare($check);  
    $statement->bindValue(1, $account);  
    $result = $statement->execute();  
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if($data){
        //帳號重複
        echo "Y";
    }else{
        
        //建立SQL
        $sql = "INSERT INTO Member(Email, Password) VALUES (?,?)";

        $statement1 = getPDO()->prepare($sql);  
        $statement1->bindValue(1, $account);  
        $statement1->bindValue(2, $pwd);
        $result1 = $statement1->execute();  
        //帳號不重複
        echo "N";
    }
?>