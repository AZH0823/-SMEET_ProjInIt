<?php
    $member_ID = $_POST['member_ID'] ;
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $check = 'SELECT Once FROM Member WHERE ID = ? ';

    $statement1 = getPDO()->prepare($check);  
    $statement1->bindValue(1, $member_ID);  
    $result1 = $statement1->execute();  

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement1->fetchAll();

    foreach($data as $index => $row){
        // 有的話回傳1 沒有的話為空值
        $a = $row["Once"];
    }
    // echo $a ;

    if($a == 1){
        // 有加過點數
        echo "Y";
    }else{
        $sql = "UPDATE Member SET Once = 1 WHERE ID = ? ";
        $statement = getPDO()->prepare($sql);   
        $statement->bindValue(1, $member_ID);  
        $result = $statement->execute();   
        echo "N";
    }
?>