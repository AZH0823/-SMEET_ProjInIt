<?php
    include ('../../conectDB/Connection.php');

    $afterPoint = $_POST['afterPoint'];
    $memberID = $_POST['memberID'];

    $updateMemberPointSql = "UPDATE Member
    SET point = :afterPoint
    WHERE ID=':memberID'";

    $updatePointstatement = getPDO()->prepare($updateMemberPointSql);
    $updatePointstatement->bindValue(':afterPoint', $afterPoint);
    $updatePointstatement->bindValue(':memberID', $memberID);
    $updatePointstatement -> execute();

    $searchData = $updatePointstatement -> fetchAll();
    print_r($searchData)
?>

UPDATE Member
SET point= 300
WHERE ID=10;