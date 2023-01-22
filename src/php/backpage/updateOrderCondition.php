<?php
     include ('../conectDB/Connection.php');

    $Msg = $_POST["Msg"];
    $OrderID = $_POST["ID"];
    
    if($Msg == 'updateCondition'){
        // 更新訂單狀態
        $Condition = $_POST["Condition"];
        
        $orderUpdateSQL = "UPDATE Orders 
        SET `Condition` = :Condition
        WHERE ID = :OrderID";


        $updateConditiontsatement = getPDO()->prepare($orderUpdateSQL);
        $updateConditiontsatement->bindValue(':Condition', $Condition);
        $updateConditiontsatement->bindValue(':OrderID', $OrderID);
        $updateConditiontsatement -> execute();
        
        $updateResult =  $updateConditiontsatement -> fetchAll();
        echo 'Y';
        
        // echo $Msg."<br>".$OrderID."<br>".$Condition."<br>";
        // print_r($updateResult); 
    }else{

        // 更新訂單明細資料
        $Name = $_POST["Name"];
        $Phone = $_POST["Phone"];
        $Email = $_POST["Email"];
        $Address = $_POST["Address"];
        $notes = nl2br($_POST["notes"]);

        $updateOderInfoSQL = "UPDATE Orders 
        SET `Name` = :Name,
            `Phone` = :Phone,
            `Email` = :Email,
            `Address` = :Address,
            `notes` = :notes
        WHERE ID = :OrderID";

        

        $updateOderInfosatement = getPDO()->prepare($updateOderInfoSQL);
        $updateOderInfosatement->bindValue(':Name', $Name);
        $updateOderInfosatement->bindValue(':Phone', $Phone);
        $updateOderInfosatement->bindValue(':Email', $Email);
        $updateOderInfosatement->bindValue(':Address', $Address);
        $updateOderInfosatement->bindValue(':notes', $notes);
        $updateOderInfosatement->bindValue(':OrderID', $OrderID);

        $updateOderInfosatement-> execute();
        $updateResult = $updateOderInfosatement -> fetch();
        echo 'Y';        

    }

    
?>