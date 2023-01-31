<?php
    include("../conectDB/Connection.php");

    $Category = $_POST['Category'];
    $QuestionContent = $_POST['QuestionContent'];
    $AnswerContent = $_POST['AnswerContent'];

    
    //建立SQL
    // $sql = "SELECT * FROM CONTACT";

    // $sql = "INSERT INTO Contact (ReleaseDate,Name, Phone, Email, Category, SuggestContent, Condition)value (now(),'{$Name}','{$Phone}','{$Mail}','{$Category}','{$SuggestContent}',1)";

    $sql = "INSERT INTO QA (  `ReleaseDate`,`Category`, `QuestionContent`, `AnswerContent`, `Condition`, `ModifyTime`)
    VALUES
    (DATE(NOW()), '{$Category}', '{$QuestionContent}', '{$AnswerContent}', 0 , NOW())";


    $statement = getPDO()->prepare($sql);  
    // $statement->bindValue(1, $account);  
    // $statement->bindValue(2, $pwd);
   $statement->execute();  
   

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);


?>