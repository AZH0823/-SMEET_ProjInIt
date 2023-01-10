<?php
    $account = htmlentities( $_POST["account"]);
    $pwd = htmlspecialchars( $_POST["pwd"] );

    include('../conectDB/Connection.php');

    //建立SQL
    $sql = "INSERT INTO SMEET.Member(Email, Password) VALUES (?,?)";

    $statement = getPDO()->prepare($sql);  
    $statement->bindValue(1, $account);  
    $statement->bindValue(2, $pwd);
    $result = $statement->execute();  

    if($result > 0 ){
        echo "Y";
    }else{
        echo "N";
    }
?>