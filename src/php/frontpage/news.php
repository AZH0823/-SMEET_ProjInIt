<?php
    include("../conectDB/Connection.php");

    $getID = @$_POST['ID'];
   

    //建立sql語法
    if(!isset($getID)){
    

        $sql = "select * from News
        where `Condition` = 1 ";
        $statement = getPDO()->prepare($sql);
        // $Searhstatement -> bindValue(':Category',$getID); 
        $statement->execute(); //執行上面的

        $data = $statement->fetchAll();//這邊是拿回來的資料
        $arr = array();
        foreach($data as $newData){
            $arr[] = array(
                'Article'=>$newData['Article'],
                'Category'=>$newData['Category'],
                'Condition'=>$newData['Condition'],
                'Date'=>$newData['Date'],
                'ID'=>$newData['ID'],
                'IMG'=>$newData['IMG'],
                'Title'=>$newData['Title'],
                'TIMG' =>$newData['TIMG']
            );}

        echo json_encode($arr); //更改成json格式

    }else{
        $NewsDetail ="select * from News
        where `ID` = :getID ;";

        $Searhstatement = getPDO()->prepare($NewsDetail);
        $Searhstatement -> bindValue(':getID',$getID); 
        $Searhstatement -> execute();
        $result = $Searhstatement -> fetchAll();
        $arr = array();
        foreach($result as $newData){
            $arr[] = array(
                'Article'=>$newData['Article'],
                'Category'=>$newData['Category'],
                'Condition'=>$newData['Condition'],
                'Date'=>$newData['Date'],
                'ID'=>$newData['ID'],
                'IMG'=>$newData['IMG'],
                'Title'=>$newData['Title'],
                'TIMG' =>$newData['TIMG']

            );}

        echo json_encode($arr); 
    }

?>