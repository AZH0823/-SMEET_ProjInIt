<?php

    include('../../conectDB/Connection.php');

    //---------------------------------------------------

       //建立SQL語法-取得會員資訊
       $sql = "SELECT ID, Category, QuestionContent, AnswerContent
                FROM QA WHERE `Condition` = 1" ;
       $statement = getPDO()->prepare($sql);   
       $result = $statement->execute();  

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
        // print_r ($data);
        //    echo json_encode($data);

         foreach($data as $newData){
                $arr[] = array(
                    'ID'=>$newData['ID'],
                    'Category'=>$newData['Category'],
                    'QuestionContent'=>$newData['QuestionContent'],
                    'AnswerContent'=>$newData['AnswerContent']
            );
    
        }
        echo json_encode ($arr);
       
?>