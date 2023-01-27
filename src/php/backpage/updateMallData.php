<?php
    include ('../conectDB/Connection.php');

    // echo 'Y'
    $Msg = $_POST["Msg"];
    $ID = $_POST["ID"];

    if($Msg == "update"){
        $State = $_POST["State"];

        $mallStateSQL = "UPDATE MallOrders 
        SET State = :State
        WHERE ID = :ID ";

        $mallStatesatement = getPDO()->prepare($mallStateSQL);
        $mallStatesatement->bindValue(':State', $State);
        $mallStatesatement->bindValue(':ID',  $ID);
        $mallStatesatement -> execute();

        $updateResult =  $mallStatesatement -> fetchAll();
        echo 'Y';
    }else{

        $Name = $_POST["Name"];
        $Phone = $_POST["Phone"];
        $Email = $_POST["Email"];
        $Address = $_POST["Address"];
    
        $updateMallData = "UPDATE MallOrders
        SET Name = :Name,
            Phone = :Phone,
            Email = :Email,
            Address = :Address
            WHERE ID = :ID";
    
        
    
        $updateMallDatastatement = getPDO()->prepare($updateMallData);
        $updateMallDatastatement->bindValue(':Name', $Name);
        $updateMallDatastatement->bindValue(':Phone', $Phone);
        $updateMallDatastatement->bindValue(':Email', $Email);
        $updateMallDatastatement->bindValue(':Address', $Address);
        $updateMallDatastatement->bindValue(':ID', $ID);
    
        $updateMallDatastatement->execute();
        $updateResult = $updateMallDatastatement -> fetch();
        echo 'Y';     
    }
 



?>