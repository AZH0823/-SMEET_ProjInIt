<?php
    include("../conectDB/Connection.php");

    $Name = $_POST['Name'];
    $Phone = $_POST['Phone'];
    $Mail = $_POST['Mail'];
    $Category = $_POST['Category'];
    $SuggestContent = $_POST['SuggestContent'];
    
    //建立SQL
    // $sql = "SELECT * FROM CONTACT";

    // $sql = "INSERT INTO Contact (ReleaseDate,Name, Phone, Email, Category, SuggestContent, Condition)value (now(),'{$Name}','{$Phone}','{$Mail}','{$Category}','{$SuggestContent}',1)";

    $sql = "INSERT INTO `smeet`.`Contact` (  `ReleaseDate`,`Name`, `Phone`, `Email`, `Category`, `SuggestContent`, `Condition`)
    VALUES
    (NOW(), '{$Name}', '{$Phone}', '{$Mail}', '{$Category}' , '{$SuggestContent}', 0)";


    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
   $statement->execute();  
   

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);


?>