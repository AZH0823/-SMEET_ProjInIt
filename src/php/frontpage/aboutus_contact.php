<?php
    include("../conectDB/Connection.php");

    $Name = $_POST['Name'];
    $Phone = $_POST['Phone'];
    $Mail = $_POST['Mail'];
    $Category = $_POST['Category'];
    $SuggesContent = $_POST['SuggesContent'];
    
    //建立SQL
    // $sql = "SELECT * FROM CONTACT";

    // $sql = "INSERT INTO Contact (ReleaseDate,Name, Phone, Email, Category, SuggesContent, Condition)value (now(),'{$Name}','{$Phone}','{$Mail}','{$Category}','{$SuggesContent}',1)";

    $sql = "INSERT INTO `smeet`.`Contact` (  `ReleaseDate`,`Name`, `Phone`, `Email`, `Category`, `SuggesContent`, `Condition`)
    VALUES
    (NOW(), '{$Name}', '{$Phone}', '{$Mail}', '{$Category}' , '{$SuggesContent}', 0)";


    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
   $statement->execute();  
   echo '李羿廷';

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);


?>