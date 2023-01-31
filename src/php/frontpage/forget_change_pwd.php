<?php
    $email = htmlspecialchars($_POST['email']);
    $update_pwd = htmlspecialchars($_POST["update_pwd"]);


    include('../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-修改會員資訊
       $sql = 'UPDATE Member 
                set 
                    `password` = ?
                where
                    `Email` = ?;' ;

       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $update_pwd);  
       $statement->bindValue(2, $email);
       $result = $statement->execute();  

?>