<?php
    $member_ID = $_POST['member_ID'];
    $pwd_new = $_POST["pwd_new"];


    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-修改會員資訊
       $sql = 'UPDATE SMEET.Member 
                set 
                    password = ?
                where
                    ID = ?;' ;

       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $pwd_new);  
       $statement->bindValue(2, $member_ID);
       $result = $statement->execute();  

?>