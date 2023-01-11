<?php
    $member_ID = $_POST['member_ID'];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $birthday = $_POST["birthday"];
    $sex = $_POST["sex"];
    $addr = $_POST["addr"];

    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-修改會員資訊
       $sql = 'UPDATE SMEET.Member 
                set 
                    Name = ?,
                    Phone = ?,
                    BirthDate = ?,
                    Sex = ?,
                    Address = ?
                where
                    ID = ?;' ;

       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $name);  
       $statement->bindValue(2, $phone);
       $statement->bindValue(3, $birthday);
       $statement->bindValue(4, $sex);
       $statement->bindValue(5, $addr);
       $statement->bindValue(6, $member_ID);
       $result = $statement->execute();  

?>