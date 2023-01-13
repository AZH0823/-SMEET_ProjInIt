<?php

    $account = $_POST["account"];
    $pwd = $_POST["pwd"];


    include('../conectDB/Connection.php');

       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM Member where Email = ? and Password = ? " ;

       $statement = getPDO()->prepare($sql);  
       $statement->bindValue(1, $account);  
       $statement->bindValue(2, $pwd);
       $statement->execute();  

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       $memberID = "";
       $memberName = "";

       foreach($data as $index => $row){
              $memberID = $row["ID"];
              $memberName = $row["Email"];
       }
       // echo $memberID;
       // echo "<br>";
       // echo $memberName;

       //判斷是否有會員資料?
       if($memberID != "" && $memberName != ""){

	       include("../conectDB/member_statue.php");

              
              //將會員資訊寫入session
              setMemberInfo($memberID, $memberName);

              //登入成功        
              echo "Y"; 

       }else{
              //登入成功
              echo "N";

       };
       

?>