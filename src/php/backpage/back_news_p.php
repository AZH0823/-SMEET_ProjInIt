<?php

    include("../conectDB/Connection.php");
    //---------------------------------------------------
    $News_Category = $_POST['News_Category'] ;
    $News_Date = $_POST['News_Date'] ;
    $News_Title = $_POST['News_Title'] ;
    $News_Article = $_POST['News_Article'] ;
    $News_IMG = $_POST['News_IMG'] ;

    // //建立SQL語法 
    $check = 'SELECT *
    FROM News
    WHERE Name = ?';

    $statement1 = getPDO()->prepare($check);  
    $statement1->bindValue(1, $News_Type);  
    $result1 = $statement1->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement1->fetchAll();

    if ($data){
        // 收藏重複
        // echo "Y";
    }else{
        // // 建立SQL語法-
        $sql = "INSERT into News( `Category`, `Date`, `Title`, `Article`, `IMG`, `Condition`)
        value( ?, ?, ?, ?, ?, 1, now())";
        $statement = getPDO()->prepare($sql);  
        $statement->bindValue(1, $News_Category);  
        $statement->bindValue(2, $News_Date);  
        $statement->bindValue(3, $News_Title);      
        $statement->bindValue(4, $News_Article);  
        $statement->bindValue(5, $News_IMG);  
        $result = $statement->execute();   

        // 收藏不重複
        // echo "N";
    };    

?>