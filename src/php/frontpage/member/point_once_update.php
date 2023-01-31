<?php
    $member_ID = $_POST['member_ID'] ;
    
    include('../../conectDB/Connection.php');

    //---------------------------------------------------
    //建立SQL
    $sql = "UPDATE Member SET Once = 1 WHERE ID = ? ";

    $statement = getPDO()->prepare($sql);   
    $statement->bindValue(1, $member_ID);  
    $result = $statement->execute();   

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

?>