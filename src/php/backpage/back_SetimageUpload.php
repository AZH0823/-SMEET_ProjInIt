<?php
    include ('../conectDB/Connection.php');
    
    if ($_FILES['ProductImage']['error'] === UPLOAD_ERR_OK){
        // echo '檔案名稱: ' . $_FILES['ProductImage']['name'] . '<br/>';
        // echo '檔案類型: ' . $_FILES['ProductImage']['type'] . '<br/>';
        // echo '檔案大小: ' . ($_FILES['ProductImage']['size'] / 1024) . ' KB<br/>';
        // echo '暫存名稱: ' . $_FILES['ProductImage']['tmp_name'] . '<br/>';
      
        $file = $_FILES['ProductImage']['tmp_name'];
        $dest = '../../img/reserve_img/' . $_FILES['ProductImage']['name'];
        
        # 將檔案移至指定位置
        move_uploaded_file($file, $dest);
        $updateDest = $dest = 'img/reserve_img/' . $_FILES['ProductImage']['name'];
        $SetID = $_POST['ID'];

        // echo $SetID;
        // 建立SQL
        $UpdateSetsSQL = "UPDATE `Sets` 
        SET  IMG = :IMG
        WHERE ID = :ID";

        //執行
        $statement = getPDO()->prepare($UpdateSetsSQL);
        $statement->bindValue(':IMG' , $dest);
        $statement->bindValue(':ID' , $SetID);
        $statement->execute();

        echo $dest;
      } else {
        echo '錯誤代碼：' . $_FILES['ProductImage']['error'] . '<br/>';
      }


?>