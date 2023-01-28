<?php
    include ('../conectDB/Connection.php');
    $data = $_POST["data"];
    // print_r($data);
    if($data == 'NoSetDishIsUpdateSData') return;

    foreach($data as $index => $row){
        $ID = $row['id'];
        $Type = $row['dishTypeID'];
        $Name = $row['dishName'];
        $Price = $row['price'];
        $Condition = $row['Condition'];
        $SetID = $row['SetID'];
    
        echo $ID."<br>".$Type."<br>". $Name."<br>".$Price."<br>".$Condition."<br>".$SetID."<br>";
        $insertSetDishSQL = "INSERT INTO Dish (`ID`,`Type`, `Name`, `Price`, 
                `Condition`,`pushisedDate`,`SetID`,`ProductType`) VALUES
                                              ( :ID,:Type, :Name, :Price,
                :Condition, NOW(), :SetID,'私廚單點')
        ";

        $insetSetDishlistStatement = getPDO()->prepare($insertSetDishSQL);
        $insetSetDishlistStatement->bindValue(':ID', $ID); 
        $insetSetDishlistStatement->bindValue(':Type', $Type); 
        $insetSetDishlistStatement->bindValue(':Name', $Name); 
        $insetSetDishlistStatement->bindValue(':Price', $Price);
        $insetSetDishlistStatement->bindValue(':Condition', $Condition);
        $insetSetDishlistStatement->bindValue(':SetID', $SetID);
        $insetSetDishlistStatement -> execute();

       
    }
    echo 'ok';
?>