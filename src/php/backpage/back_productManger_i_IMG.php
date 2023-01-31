<?php
  
    include ('../conectDB/Connection.php');
    $dish_ID = $_POST["ID"];
    $dish_IMG1 = $_FILES["ProductImage1"];
    $dish_IMG2 = $_FILES["ProductImage2"];
    $dish_IMG3 = $_FILES["ProductImage3"];
    // echo $dish_ID;
    // print_r($dish_IMG1);
    // print_r($dish_IMG2);
    // print_r($dish_IMG3);


      //上傳檔案的放置位置(路徑)
      function getFilePath(){        

        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //Apache根目錄之下的檔案存放路徑
        $filePath = "/img/shopmall/";
        
        return $ServerRoot.$filePath;

    }

    // $filePath_Temp1 = $_FILES["ProductImage1"]["tmp_name"];
    // $filePath_Temp2 = $_FILES["ProductImage2"]["tmp_name"];
    // $filePath_Temp3 = $_FILES["ProductImage3"]["tmp_name"];
    // print_r($filePath_Temp1);
    // print_r($filePath_Temp2);
    // print_r($filePath_Temp3);

    
    //先判斷圖片是否上傳成功?

    if($_FILES["ProductImage"]["error"] > 0){

      echo "上傳失敗: 錯誤代碼".$_FILES["ProductImage"]["error"];

  }else{

      //Server上的暫存檔路徑含檔名
      $filePath_Temp1 = $_FILES["ProductImage1"]["tmp_name"];
      $filePath_Temp2 = $_FILES["ProductImage2"]["tmp_name"];
      $filePath_Temp3 = $_FILES["ProductImage3"]["tmp_name"];

      //欲放置的檔案路徑
      $filePath1 = getFilePath().$_FILES["ProductImage1"]["name"];
      $filePath2 = getFilePath().$_FILES["ProductImage2"]["name"];
      $filePath3 = getFilePath().$_FILES["ProductImage3"]["name"];

      //將暫存檔搬移到正確位置
      if(copy($filePath_Temp1, $filePath1)){


          //建立SQL
          $sql = "INSERT into Dish( `IMG`) value( ?)";
          
          //執行
          $statement = getPDO()->prepare($sql);
          $statement->bindValue(1 , $_FILES["ProductImage1"]["name"]);
          $statement->execute();

          //導頁                        
          echo "1:新增成功!";

      }else{            
          echo "2:拷貝/移動上傳圖片失敗!";            
      }
      if(copy($filePath_Temp2, $filePath2)){


        //建立SQL
        $sql = "INSERT into Dish( `IMG`) value( ?)";
        
        //執行
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1 , $_FILES["ProductImage2"]["name"]);
        $statement->execute();

        //導頁                        
        echo "2:新增成功!";

    }else{            
        echo "2:拷貝/移動上傳圖片失敗!";            
    }
      if(copy($filePath_Temp3, $filePath3)){


        //建立SQL
        $sql = "INSERT into Dish( `IMG`) value( ?)";
        
        //執行
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1 , $_FILES["ProductImage3"]["name"]);
        $statement->execute();

        //導頁                        
        echo "3:新增成功!";

    }else{            
        echo "3:拷貝/移動上傳圖片失敗!";            
    }
  }

    // print_r($_POST['ProductImage']);

    // print_r($_FILES['ProductImage']['name']);
    // $file = $_FILES['ProductImage']['tmp_name'];
    // $dest = '/Applications/XAMPP/xamppfiles/htdocs/smeet_project_new/dist/img/test_img/'. $_FILES['ProductImage']['name'];
    // echo $dest;
    // move_uploaded_file($file, $dest);

    

    
    // if ($_FILES['ProductImage']['error'] === UPLOAD_ERR_OK){
    //     // echo '檔案名稱: ' . $_FILES['ProductImage']['name'] . '<br/>';
    //     // echo '檔案類型: ' . $_FILES['ProductImage']['type'] . '<br/>';
    //     // echo '檔案大小: ' . ($_FILES['ProductImage']['size'] / 1024) . ' KB<br/>';
    //     // echo '暫存名稱: ' . $_FILES['ProductImage']['tmp_name'] . '<br/>';
      
    //     $file = $_FILES['ProductImage']['tmp_name'];
    //     $dest = '../../img/shopmall/' . $_FILES['ProductImage']['name'];
        
    //     # 將檔案移至指定位置
    //     $dest = '/Applications/XAMPP/xamppfiles/htdocs/smeet_project_new/dist/img/test_img/'. $_FILES['ProductImage']['name'];
    //     move_uploaded_file($file, $dest);
        
    //     $SetID = $_POST['ID'];

    //     // echo $SetID;
    //     // 建立SQL
    //     $UpdateSetsSQL = "UPDATE `Dish` 
    //     SET  IMG = :IMG
    //     WHERE ID = :ID";

    //     //執行
    //     $statement = getPDO()->prepare($UpdateSetsSQL);
    //     $statement->bindValue(':IMG' , $dest);
    //     $statement->bindValue(':ID' , $SetID);
    //     $statement->execute();

    //     echo $dest;
    //   } else {
    //     echo '錯誤代碼：' . $_FILES['ProductImage']['error'] . '<br/>';
    //   }
      


?>