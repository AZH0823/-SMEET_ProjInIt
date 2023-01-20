<?php
    include ('../../conectDB/Connection.php');

    $afterPoint = $_POST['point'];
    $memberID = $_POST['memberID'];

    // echo $afterPoint."<br>";
    // echo $memberID."<br>";
    $updateMemberPointSql = "UPDATE Member 
    SET point = :afterPoint
    WHERE ID = :memberID ";

    $updatePointstatement = getPDO()->prepare($updateMemberPointSql);
    $updatePointstatement->bindValue(':afterPoint', $afterPoint);
    $updatePointstatement->bindValue(':memberID', $memberID);
    $updatePointstatement -> execute();
    
    $searchData = $updatePointstatement -> fetchAll();
    // print_r($searchData);
?>