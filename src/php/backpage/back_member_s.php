<?php
    
    include('../conectDB/Connection.php');

    // ----------------------------------------------
    // if($_COOKIE['set']==''){
    //     setcookie('set', 10, time()+60);
        // header("location:back_meberManger.html");
    // }
    // if($_POST['numpage']!=''){
    //     setcookie('set', $_POST['numpage'], time()+60);
    //     header("location:back_meberManger.html");
    // }
    //---------------------------------------------------
    //建立SQL
    $select = 'SELECT ID, Email, Name, Phone, BirthDate, Sex, Address, multiLogin, point
    FROM Member';

    $statement = getPDO()->prepare($select);  
    $result = $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    $per= 10 ;//每次要顯示幾筆資料
    $total=count($data);//總共有幾筆資料
    $pages=ceil($total/$per);//透過無條件進位法，算出共需要幾頁

    if (!isset($_POST["page"])){ //假如$_GET["page"]未設置
        $page = intval(1); //則在此設定起始頁數
    } else {
        $page = intval($_POST["page"]); //確認頁數只能夠是數值資料
    }
    // $page = 1 ;
    $start = intval(($page-1)*$per,); //每一頁開始的資料序號

    //建立SQL
    $select_page = "SELECT `ID`, `Email`, `Name`, `Phone`, `BirthDate`, `Sex`, `Address`, `multiLogin`, `point`
    FROM `Member`
    limit ? , ? ";

    $statement_page = getPDO()->prepare($select_page);  
    $statement_page -> bindValue(1, $start , PDO::PARAM_INT);  
    $statement_page -> bindValue(2, $per , PDO::PARAM_INT);  
    $result_page = $statement_page -> execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data_page = $statement_page->fetchAll();

    // echo "第幾頁開始";
    // echo gettype($start);
    // echo "<br>";
    // echo "每次要顯示幾筆資料";
    // echo gettype($per);
    // echo "<br>";
    // echo "總共有幾筆資料";
    // echo $total;
    // echo "<br>";
    // echo "共需要幾頁";
    // echo $pages;

    $arr_page = array($total,$pages,$start);
    // echo json_encode ($arr_page);

    foreach($data_page as $newData){
        $arr[] = array(
            'ID'=>$newData['ID'],
            'Email'=>$newData['Email'],
            'Name'=>$newData['Name'],
            'Phone' => $newData['Phone'],
            'BirthDate'=> $newData['BirthDate'],
            'Sex'=> $newData['Sex'],
            'Address'=> $newData['Address'],
            'multiLogin'=> $newData['multiLogin'],
            'point'=> $newData['point']
        );};
    
        // echo json_encode ($arr);
        
        $arr_all = [$arr_page,$arr];
        
        echo json_encode ($arr_all);
?>