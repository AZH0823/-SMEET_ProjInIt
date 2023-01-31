<?php
    include ('../conectDB/Connection.php');

    // echo 'Y'
    $Msg = $_POST["Msg"];
    $ID = $_POST["ID"];

    if($Msg == "update"){
        $State = $_POST["State"];

        $mallStateSQL = "UPDATE TEAMS 
        SET State = :State
        WHERE ID = :ID ";

        $chefStatesatement = getPDO()->prepare($chefStateSQL);
        $chefStatesatement->bindValue(':State', $State);
        $chefStatesatement->bindValue(':ID',  $ID);
        $chefStatesatement -> execute();

        $updateResult =  $chefStatesatement -> fetchAll();
        echo 'Y';
    }else{

        $Name = $_POST["LederName"];
        $LederProfile = $_POST["LederProfile"];
    
        $updateMallData = "UPDATE TEAMS
        SET LederName = :LederName,
            LederProfile = :LederProfile,
            WHERE ID = :ID";
    
        
    
        $updateChefDatastatement = getPDO()->prepare($updateChefData);
        $updateChefDatastatement->bindValue(':LederName', $LederName);
        $updateChefDatastatement->bindValue(':LederProfile', $LederProfile);
        $updateChefDatastatement->bindValue(':ID', $ID);
    
        $updateChefDatastatement->execute();
        $updateResult = $updateChefDatastatement -> fetch();
        echo 'Y';     
    }
 



?>