-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: smeet
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Chefs`
--

DROP TABLE IF EXISTS `Chefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Chefs` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Job` varchar(20) DEFAULT NULL,
  `IMG` varchar(100) NOT NULL,
  `TeamID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_Chefs_TeamID_idx` (`TeamID`),
  CONSTRAINT `FK_Chefs_TeamID` FOREIGN KEY (`TeamID`) REFERENCES `Teams` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Chefs`
--

LOCK TABLES `Chefs` WRITE;
/*!40000 ALTER TABLE `Chefs` DISABLE KEYS */;
INSERT INTO `Chefs` VALUES (1,'立雁山','廚師長','img/chefteam_img/chef1.png',1),(2,'吳健智','副主廚','img/chefteam_img/chef2.png',1),(3,'蔡恕君','副主廚','img/chefteam_img/chef3.png',1),(4,'蔡宇亭','冷盤廚師','img/chefteam_img/chef4.png',1),(5,'張佳琦','甜點師','img/chefteam_img/chef5.png',1),(6,'李藝廷','行政主廚','img/chefteam_img/chef6.png',1),(7,'陳早安','幫廚','img/chefteam_img/chef7.png',1),(8,'夏午查','幫廚','img/chefteam_img/chef8.png',1),(9,'菜雨停','廚師長','img/chefteam_img/chef9.png',2),(10,'陳品鞍','副主廚','img/chefteam_img/chef10.png',2),(11,'戴秀軒','副主廚','img/chefteam_img/chef11.png',2),(12,'初原菌','冷盤廚師','img/chefteam_img/chef12.png',2),(13,'陳一璇','甜點師','img/chefteam_img/chef13.png',2),(14,'陳幼榕','行政主廚','img/chefteam_img/chef14.png',2),(15,'蔡漢頤','幫廚','img/chefteam_img/chef15.png',2),(16,'許皓文','幫廚','img/chefteam_img/chef16.png',2),(17,'吳薦痣','廚師長','img/chefteam_img/chef17.png',3),(18,'盧顴骨','副主廚','img/chefteam_img/chef18.png',3),(19,'陳品猿','副主廚','img/chefteam_img/chef19.png',3),(20,'張勝劫','冷盤廚師','img/chefteam_img/chef20.png',3),(21,'鍋子寧','甜點師','img/chefteam_img/chef21.png',3),(22,'張恩瓶','行政主廚','img/chefteam_img/chef22.png',3),(23,'楊子融','幫廚','img/chefteam_img/chef23.png',3),(24,'董怡軍','幫廚','img/chefteam_img/che24f.png',3);
/*!40000 ALTER TABLE `Chefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ReleaseDate` timestamp NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Category` varchar(45) NOT NULL,
  `SuggestContent` varchar(500) NOT NULL,
  `Condition` tinyint NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
INSERT INTO `Contact` VALUES (1,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','預約','婚宴預約120人，時間是下半年的12/7號，可以嗎？',1),(2,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','付款','可以分12期嗎？',1),(3,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','租借','請問有提供場地租借嗎？',1),(4,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','商城','可以超商取貨嗎？運費多少？',1),(5,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','合作','貴公司您好，請問異業合作可以聯繫誰？',1),(6,'2023-01-05 09:21:46','陳品元','0912345678','a012345@gmail.com','其他','line怎麼沒人回覆，已經等一個小時了！這種服務不行耶',1);
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dish`
--

DROP TABLE IF EXISTS `Dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dish` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Type` int NOT NULL COMMENT '預約:\n湯物,前菜,刺身,主食,甜點,飲品,單品\n商城:\n商城主食,商城湯品,商城甜品\n服務',
  `Name` varchar(30) NOT NULL,
  `Price` int DEFAULT NULL,
  `IMG` varchar(300) DEFAULT NULL,
  `ShopPoint` varchar(500) DEFAULT NULL,
  `Introduction` varchar(500) DEFAULT NULL,
  `Condition` tinyint(1) NOT NULL,
  `pushisedDate` timestamp NOT NULL,
  `SetID` int DEFAULT NULL,
  `ProductType` varchar(20) DEFAULT NULL COMMENT '私廚單點,商城冷凍',
  PRIMARY KEY (`ID`),
  KEY `FK_Dishs_SetID_idx` (`SetID`),
  KEY `FK_DishsType_TypeID_idx` (`Type`),
  CONSTRAINT `FK_Dishs_SetID` FOREIGN KEY (`SetID`) REFERENCES `Sets` (`ID`),
  CONSTRAINT `FK_DishsType_TypeID` FOREIGN KEY (`Type`) REFERENCES `DishsType` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dish`
--

LOCK TABLES `Dish` WRITE;
/*!40000 ALTER TABLE `Dish` DISABLE KEYS */;
INSERT INTO `Dish` VALUES (1,1,'奶香牛肝菌野菇濃湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(2,1,'石斑海鮮清湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(3,2,'燻鮭魚番茄佐優格醬',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(4,2,'深海魚皮野蔬沙拉佐醋醬',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(5,3,'生魚片拼盤',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(6,4,'嫩煎干貝佐松露菲力',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(7,4,'日本小田和牛壽喜燒',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(8,4,'龍蝦佐鮑魚海鮮拼盤',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(9,5,'抹茶布丁搭配綿密金時紅豆',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(10,5,'栗子羊羹',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(11,5,'春手毬和菓子',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(12,6,'抹茶海鹽奶蓋',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(13,6,'烘焙曼巴咖啡',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(14,6,'高山金萱茶',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(15,6,'檸檬海鹽氣泡飲',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',1,'私廚單點'),(18,1,'燻鮭魚番茄濃湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(19,1,'手沖牛肉清湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(20,2,'鳟魚卵干貝卷',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(21,2,'昆布酒蒸鮑魚',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(22,3,'生魚片拼盤',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(23,4,'日落低溫慢烤和牛',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(24,4,'嫩肩松坂豬佐松露蕈菇',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(25,4,'嫩肩小羔羊佐海大蝦',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(26,5,'和風酒釀野露丸串',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(27,5,'抹茶烤春日卷',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(28,5,'繡球花和菓子',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(29,6,'大江戶紅豆鮮奶蓋',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(30,6,'藝妓咖啡',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(31,6,'富士山和風菓茶',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(32,6,'私覓碳香茶',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',2,'私廚單點'),(33,1,'京都雪藏干貝湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(34,1,'蛤蠣煮物院雞湯',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(35,2,'京都魚子醬松葉蟹',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(36,2,'大閘蟹握壽司',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(37,3,'生魚片拼盤',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(38,4,'日本A5黑毛和牛岩板燒',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(39,4,'酒焰龍蝦盛宴',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(40,4,'A4熊本縣紐約客',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(41,5,'百香果烏龍茶晶球布丁',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(42,5,'北海道私覓熔岩心',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(43,5,'千代見草和菓子',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(44,6,'日暈雙月奶蓋',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(45,6,'京都淺咖啡',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(46,6,'星月茶',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(47,6,'柚香清氣泡飲',0,NULL,NULL,NULL,1,'2023-01-17 07:38:49',3,'私廚單點'),(48,7,'廣島牡蠣釜飯',500,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(49,7,'和牛蕈菇釜飯',800,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(50,7,'黑鮪刺身',800,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(51,7,'蘆筍蝦手卷',300,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(52,7,'迷你上等三色丼',240,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(53,7,'北海道松葉蟹蒸蛋',740,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(54,7,'大閘蟹蟹黃球',500,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(55,7,'燻鮭魚蔬菜濃湯',200,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(56,7,'蘭姆酒和牛澄清湯',300,NULL,NULL,NULL,1,'2023-01-17 07:38:58',NULL,'私廚單點'),(57,8,'黑鮪刺身',700,'./img/shopmall_img/shopmall_product01.jpg ./img/shopmall_img/shopmall_product02.jpg ./img/shopmall_img/shopmall_product03.jpg','一道擁有日式美學的油醋刺身','以柴魚高湯的土佐醋來製作成土佐醋凍片，將酸感降低，搭配油脂豐富的鮪魚、油漬刺蔥與番茄製造出更有層次的風味。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(58,8,'廣島牡蠣釜飯',450,'./img/shopmall_img/shopmall_product04.jpg ./img/shopmall_img/shopmall_product05.jpg ./img/shopmall_img/shopmall_product06.jpg','以「牡蠣、牛蒡」為主要元素，再加入牛肝菌、草菇為主的湯底。','以「牡蠣、牛蒡」為主要元素，再加入牛肝菌、草菇為主的湯底，帶出牡蠣本身的鮮甜，米飯經由高湯燉煮，更增添食物的清淡香氣。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(59,8,'蘆筍蝦手捲',300,'./img/shopmall_img/shopmall_product07.jpg ./img/shopmall_img/shopmall_product08.jpg ./img/shopmall_img/shopmall_product09.jpg','鮮嫩的富山白蝦搭配果醋及海苔鮮味非常開胃，接上新鮮清爽的蘆筍讓人唇齒留香。','鮮嫩的富山白蝦搭配果醋及海苔鮮味非常開胃，接上新鮮清爽的蘆筍讓人唇齒留香，最後再以鹹香的干貝塔搭配濃郁香氣的黑松露與蔬菜芝麻葉，製造出更有層次的風味。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(60,8,'大閘蟹膏手卷',350,'./img/shopmall_img/shopmall_product10.jpg ./img/shopmall_img/shopmall_product11.jpg ./img/shopmall_img/shopmall_product12.jpg','以醃漬物、蒔蘿帶出爽脆口感與辛香，選用紅藜麥替代米飯的黏膩感，最後添上扎實的蟹肉、鮪魚中腹使鮮味、油脂香氣佈滿口中。','以醃漬物、蒔蘿帶出爽脆口感與辛香，選用紅藜麥替代米飯的黏膩感，最後添上扎實的蟹肉、鮪魚中腹使鮮味、油脂香氣佈滿口中，每一口都能品嘗到不同的風味，是喜愛螃蟹的饕客不可錯過的料理之一。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(61,9,'槍烏賊清湯',300,'./img/shopmall_img/shopmall_product13.jpg ./img/shopmall_img/shopmall_product14.jpg ./img/shopmall_img/shopmall_product15.jpg','口感彈嫩的北海道白貝，搭配台灣乾魷魚熬煮的高湯、特級魚子醬、指橙等，味道豐美。','口感彈嫩的北海道白貝，搭配台灣乾魷魚熬煮的高湯、特級魚子醬、指橙等，味道豐美。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(62,9,'蘭姆酒和牛澄清湯',350,'./img/shopmall_img/shopmall_product16.jpg ./img/shopmall_img/shopmall_product17.jpg ./img/shopmall_img/shopmall_product18.jpg','以經典法式澄清湯 Consommé手法經過三次的慢熬細篩，只留下和牛深厚精華，幾乎未見油脂的澄清湯。','以經典法式澄清湯 Consommé手法經過三次的慢熬細篩，只留下和牛深厚精華，幾乎未見油脂的澄清湯，在熱湯中品嘗煙燻過的菲力與彈牙龍蝦，經過煙燻的菲力降低油脂為，而風味卻更深厚、有韻味。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(63,9,'燻鮭魚蔬菜濃湯',350,'./img/shopmall_img/shopmall_product19.jpg ./img/shopmall_img/shopmall_product20.jpg ./img/shopmall_img/shopmall_product21.jpg','獨特的冷燻法，木質燻香均勻滲透肉質，同時保留鮭魚的鮮美再加入小火慢熬的蔬果湯底，同時享有食蔬及海鮮的甘甜。','獨特的冷燻法，木質燻香均勻滲透肉質，同時保留鮭魚的鮮美再加入小火慢熬的蔬果湯底，同時享有食蔬及海鮮的甘甜。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(64,10,'千代見草和菓子',250,'./img/shopmall_img/shopmall_product22.jpg ./img/shopmall_img/shopmall_product23.jpg ./img/shopmall_img/shopmall_product24.jpg','菊花又名千代見草，於平安時期是貴族觀賞的花卉，現今融入剪菊技術，內餡融入奶油乳酪增加鹹甜感、夏威夷豆增加口感與堅果香氣，鹹甜鹹甜的滋味讓人想念','菊花又名千代見草，於平安時期是貴族觀賞的花卉，現今融入剪菊技術，內餡融入奶油乳酪增加鹹甜感、夏威夷豆增加口感與堅果香氣，鹹甜鹹甜的滋味讓人想念',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(65,10,'和風酒釀野露丸串',250,'./img/shopmall_img/shopmall_product25.jpg ./img/shopmall_img/shopmall_product26.jpg ./img/shopmall_img/shopmall_product27.jpg','清酒釀製的米香為基底，搭配爽口的糯米串，外脆內軟的口感慢慢在嘴裡化開。','清酒釀製的米香為基底，搭配爽口的糯米串，外脆內軟的口感慢慢在嘴裡化開。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(66,8,'和牛蕈菇釜飯',400,'./img/shopmall_img/shopmall_product28.jpg ./img/shopmall_img/shopmall_product29.jpg ./img/shopmall_img/shopmall_product30.jpg','牛油均勻塗抹在攝氏300度的高溫火山岩後，再放入鮮切日本頂級黑毛A5和牛','牛油均勻塗抹在攝氏300度的高溫火山岩後，再放入鮮切日本頂級黑毛A5和牛，岩板與油脂豐富的和牛油花吱吱作響，入口即化的肉質只想一嘗再嚐。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(67,8,'北海道松葉蟹蒸蛋',400,'./img/shopmall_img/shopmall_product31.jpg ./img/shopmall_img/shopmall_product32.jpg ./img/shopmall_img/shopmall_product33.jpg','北海道松葉蟹來自日本北海道水域，被稱為「日本三大名蟹」之一，味道鮮甜美味、肉質軟滑','北海道松葉蟹來自日本北海道水域，被稱為「日本三大名蟹」之一，味道鮮甜美味、肉質軟滑、蟹膏香濃，另外再以鰻魚、牛蒡、雞蛋延續美味，增添不同層次的大地風味的茶碗蒸。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(68,8,'迷你上等三色丼',450,'./img/shopmall_img/shopmall_product34.jpg ./img/shopmall_img/shopmall_product35.jpg ./img/shopmall_img/shopmall_product36.jpg','嚴選新鮮鮭魚生魚片、北海道干貝、鮭魚卵，再加上牧場精心飼養的靈芝蛋黃增加滑順的口感，一場味覺的饗宴限時上演。','嚴選新鮮鮭魚生魚片、北海道干貝、鮭魚卵，再加上牧場精心飼養的靈芝蛋黃增加滑順的口感，一場味覺的饗宴限時上演。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(69,8,'大閘蟹蟹黃球',300,'./img/shopmall_img/shopmall_product37.jpg ./img/shopmall_img/shopmall_product01.jpg ./img/shopmall_img/shopmall_product02.jpg','大閘蟹蟹黃球內部包裹著一整隻太湖大閘蟹的蟹膏做為內餡，外層由南瓜、大閘蟹肉作為外衣','大閘蟹蟹黃球內部包裹著一整隻太湖大閘蟹的蟹膏做為內餡，外層由南瓜、大閘蟹肉作為外衣，一口咬下外衣微酥的口感，在體會內餡濃郁蟹膏的美好。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(70,8,'富山縣小白蝦握壽司',450,'./img/shopmall_img/shopmall_product11.jpg ./img/shopmall_img/shopmall_product12.jpg ./img/shopmall_img/shopmall_product22.jpg','選用富山白蝦、昆布、檸檬胡椒，清爽的口感使人唇齒留香，最後再輔以濃郁香氣的黑松露與蔬菜芝麻葉，製造更富層次的口感。','選用富山白蝦、昆布、檸檬胡椒，清爽的口感使人唇齒留香，最後再輔以濃郁香氣的黑松露與蔬菜芝麻葉，製造更富層次的口感。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(71,9,'日式黑豬肉清湯',450,'./img/shopmall_img/shopmall_product24.jpg ./img/shopmall_img/shopmall_product15.jpg ./img/shopmall_img/shopmall_product05.jpg','嚴選日式黑豬肉製成的高級清湯。','嚴選日式黑豬肉製成的高級清湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(72,9,'當季魚頭味噌湯',450,'./img/shopmall_img/shopmall_product25.jpg ./img/shopmall_img/shopmall_product16.jpg ./img/shopmall_img/shopmall_product06.jpg','嚴選當季魚頭來製作的魚頭味噌湯。','嚴選當季魚頭來製作的魚頭味噌湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(73,9,'季節魚頭湯',450,'./img/shopmall_img/shopmall_product26.jpg ./img/shopmall_img/shopmall_product17.jpg ./img/shopmall_img/shopmall_product07.jpg','嚴選當季魚頭來製作的魚頭湯。','嚴選當季魚頭來製作的魚頭湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(74,9,'鮮錦味噌湯',450,'./img/shopmall_img/shopmall_product27.jpg ./img/shopmall_img/shopmall_product18.jpg ./img/shopmall_img/shopmall_product08.jpg','嚴選當季海鮮鮮錦味噌湯。','嚴選當季海鮮鮮錦味噌湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(75,9,'日式綜合海陸湯',450,'./img/shopmall_img/shopmall_product28.jpg ./img/shopmall_img/shopmall_product19.jpg ./img/shopmall_img/shopmall_product09.jpg','嚴選當季海鮮及路上怕的動物製成的海陸湯。','嚴選當季海鮮及路上怕的動物製成的海陸湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(76,9,'上等日本和牛湯',450,'./img/shopmall_img/shopmall_product29.jpg ./img/shopmall_img/shopmall_product20.jpg ./img/shopmall_img/shopmall_product10.jpg','嚴選上等日本和牛製成的湯。','嚴選上等日本和牛製成的湯，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(77,10,'草莓大福',250,'./img/shopmall_img/shopmall_product30.jpg ./img/shopmall_img/shopmall_product21.jpg ./img/shopmall_img/shopmall_product11.jpg','嚴選上等草莓製成的大福。','嚴選上等草莓製成的大福，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(78,10,'日式銅鑼燒',250,'./img/shopmall_img/shopmall_product31.jpg ./img/shopmall_img/shopmall_product22.jpg ./img/shopmall_img/shopmall_product12.jpg','嚴選上等紅豆製成的大福。','嚴選上等紅豆製成的大福，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(79,10,'奶油鯛魚燒',250,'./img/shopmall_img/shopmall_product32.jpg ./img/shopmall_img/shopmall_product23.jpg ./img/shopmall_img/shopmall_product13.jpg','嚴選上等奶油製成的鯛魚燒。','嚴選上等奶油製成的鯛魚燒，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(80,10,'南瓜水羊羹',250,'./img/shopmall_img/shopmall_product33.jpg ./img/shopmall_img/shopmall_product24.jpg ./img/shopmall_img/shopmall_product14.jpg','嚴選上等奶油製成的鯛魚燒。','嚴選上等奶油製成的鯛魚燒，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(81,10,'黑糖麻糬丁',250,'./img/shopmall_img/shopmall_product01.jpg ./img/shopmall_img/shopmall_product24.jpg ./img/shopmall_img/shopmall_product14.jpg','嚴選上等黑糖製成的麻糬丁。','嚴選上等黑糖製成的麻糬丁，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(82,10,'卡士達珍珠鯛魚燒',250,'./img/shopmall_img/shopmall_product02.jpg ./img/shopmall_img/shopmall_product24.jpg ./img/shopmall_img/shopmall_product14.jpg','嚴選上等卡士達製成的鯛魚燒。','嚴選上等卡士達製成的鯛魚燒，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(83,10,'日式湯種紅豆包',250,'./img/shopmall_img/shopmall_product03.jpg ./img/shopmall_img/shopmall_product24.jpg ./img/shopmall_img/shopmall_product14.jpg','嚴選上等紅豆製成的紅豆包。','嚴選上等紅豆製成的紅豆包，越吃越感動會掉眼淚的那種。',1,'2023-01-07 19:47:55',NULL,'商城冷凍'),(84,11,'廚具',300,NULL,NULL,'盤子、餐具、餐巾(必選)',1,'2023-01-17 07:39:20',NULL,'私廚單點'),(85,11,'炊具',300,NULL,NULL,'鍋碗瓢盆(必選)',1,'2023-01-17 07:39:20',NULL,'私廚單點'),(86,11,'餐盤',400,NULL,NULL,'餐盤&拼盤',1,'2023-01-17 07:39:20',NULL,'私廚單點'),(87,11,'服務人員',500,NULL,NULL,'全程服務及售後清潔',1,'2023-01-17 07:39:20',NULL,'私廚單點');
/*!40000 ALTER TABLE `Dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DishsType`
--

DROP TABLE IF EXISTS `DishsType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DishsType` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL COMMENT '預約:\n湯物,前菜,刺身,主食,甜點,飲品,單品\n商城:\n商城主食,商城湯品,商城甜品',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DishsType`
--

LOCK TABLES `DishsType` WRITE;
/*!40000 ALTER TABLE `DishsType` DISABLE KEYS */;
INSERT INTO `DishsType` VALUES (1,'湯物'),(2,'前菜'),(3,'刺身'),(4,'主食'),(5,'甜點'),(6,'飲品'),(7,'單品'),(8,'商城主食'),(9,'商城湯品'),(10,'商城甜品'),(11,'服務');
/*!40000 ALTER TABLE `DishsType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FavoriteLists`
--

DROP TABLE IF EXISTS `FavoriteLists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FavoriteLists` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DishID` int NOT NULL,
  `collectionTime` timestamp NOT NULL,
  `Member_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_favoriteList_Member1_idx` (`Member_ID`),
  KEY `FK_FavoriteList_DishID_idx` (`DishID`),
  CONSTRAINT `FK_FavoriteList_DishID` FOREIGN KEY (`DishID`) REFERENCES `Dish` (`ID`),
  CONSTRAINT `FK_FavoriteList_MemberID` FOREIGN KEY (`Member_ID`) REFERENCES `Member` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FavoriteLists`
--

LOCK TABLES `FavoriteLists` WRITE;
/*!40000 ALTER TABLE `FavoriteLists` DISABLE KEYS */;
INSERT INTO `FavoriteLists` VALUES (1,57,'2023-01-17 09:11:55',1),(2,83,'2023-01-17 09:11:55',1),(3,70,'2023-01-17 09:11:55',1),(4,75,'2023-01-17 09:11:55',1),(5,74,'2023-01-17 09:11:55',1);
/*!40000 ALTER TABLE `FavoriteLists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MallDetail`
--

DROP TABLE IF EXISTS `MallDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MallDetail` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `MallID` int NOT NULL,
  `qty` int NOT NULL,
  `price` int NOT NULL,
  `DishID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_MallDetail_MallID_idx` (`MallID`),
  KEY `FK_MallDetail_DishID_idx` (`DishID`),
  CONSTRAINT `FK_MallDetail_DishID` FOREIGN KEY (`DishID`) REFERENCES `Dish` (`ID`),
  CONSTRAINT `FK_MallDetail_MallID` FOREIGN KEY (`MallID`) REFERENCES `MallOrders` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MallDetail`
--

LOCK TABLES `MallDetail` WRITE;
/*!40000 ALTER TABLE `MallDetail` DISABLE KEYS */;
INSERT INTO `MallDetail` VALUES (1,1,1,700,57),(2,1,2,450,58),(3,1,3,300,59),(4,2,2,350,60),(5,2,1,250,64),(6,2,1,250,65),(7,2,1,300,69),(8,3,2,450,70),(9,3,1,300,61),(10,4,4,450,73);
/*!40000 ALTER TABLE `MallDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MallOrders`
--

DROP TABLE IF EXISTS `MallOrders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MallOrders` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Date` timestamp NOT NULL,
  `State` varchar(10) NOT NULL,
  `Payment` varchar(10) NOT NULL,
  `TotalPrice` int NOT NULL,
  `Points` int DEFAULT '0',
  `Invoice` varchar(10) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Delivery` varchar(20) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `MemberID` int NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_MallOreder_MemberID_idx` (`MemberID`),
  CONSTRAINT `FK_MallOreder_MemberID` FOREIGN KEY (`MemberID`) REFERENCES `Member` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MallOrders`
--

LOCK TABLES `MallOrders` WRITE;
/*!40000 ALTER TABLE `MallOrders` DISABLE KEYS */;
INSERT INTO `MallOrders` VALUES (1,'2022-12-23 20:10:00','訂單成立已付款','信用卡',2500,25,'GA03843214','abc123@gmail.com','宅配','台北市中山區建國北路一段96號B1',2,'蔡廷廷','0912345678'),(2,'2022-12-31 02:30:00','訂單成立已付款','信用卡',1500,0,'GB03591457','abc125@gmail.com','宅配','台北市松山區敦化北路100號B1',3,'厲硯山','0923345252'),(3,'2023-01-04 03:00:00','訂單成立已付款','信用卡',1200,500,'GA08761234','cba987@gmail.com','宅配','台北市松山區南京東路三段210巷4號2樓',5,'陳園元','0966796543'),(4,'2023-01-07 19:30:00','訂單成立已付款','信用卡',1800,150,'CA13572468','abc128@gmail.com','宅配','台北市萬華區貴陽街二段116號',6,'蔡雨停','0916345675');
/*!40000 ALTER TABLE `MallOrders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Member`
--

DROP TABLE IF EXISTS `Member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Member` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `BirthDate` date DEFAULT NULL,
  `Sex` varchar(5) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `multiLogin` varchar(45) DEFAULT NULL,
  `point` int DEFAULT '0',
  `Once` tinyint DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Member`
--

LOCK TABLES `Member` WRITE;
/*!40000 ALTER TABLE `Member` DISABLE KEYS */;
INSERT INTO `Member` VALUES (1,'abc123@gmail.com','abc123123','管理員','0915111111','1993-02-26','男','台北市中山區八德路二段174巷5號',NULL,7,1),(2,'abc124@gmail.com','abc123123','蔡樹均','0915531123','1993-02-26','男','台北市中山區八德路二段174巷5號',NULL,0,0),(3,'abc125@gmail.com','abc123123','厲硯山','0923345252','1995-07-16','男','台北市松山區敦化北路100號B1',NULL,400,1),(4,'abc126@gmail.com','abc123123','吳建置','0972567345','1992-05-04','男','台北市中山區建國北路一段74號',NULL,1,1),(5,'abc127@gmail.com','abc123123','張家麒','0912167652','1997-07-19','男','台北市松山區南京東路四段133巷4弄16號',NULL,2,0),(6,'abc128@gmail.com','abc123123','蔡雨停','0916345675','1996-05-29','女','台北市萬華區貴陽街二段116號',NULL,33,0),(7,'abc129@gmail.com','abc123123','李逸停','0916345675','1992-06-24','男','台北市中正區衡陽路74號',NULL,44,0),(8,'abc131@gmail.com','abc123123','蔡雨停','0913464375','1996-05-29','女','台北市大同區太原路48巷7號',NULL,22,0),(9,'abc132@gmail.com','abc123123','陳怡君','0911234575','1997-03-06','女','台北市大同區西寧北路43號',NULL,22,1),(10,'abc133@gmail.com','abc123123','張宇和','0911245675','1995-02-16','男','台北市中山區長春路176號',NULL,11,0),(11,'abc134@gmail.com','abc123123','黃家佳','0916123675','1999-05-12','男','台北市中正區仁愛路二段108號',NULL,22,1),(12,'abc135@gmail.com','abc123123','葉清芳','0916378978','1973-06-11','女','台北市大安區建國南路二段11巷28號',NULL,3,0),(13,'abc136@gmail.com','abc123123','張漢萬','0913245675','1984-04-15','男','台北市大安區忠孝東路三段10巷22號',NULL,4,0),(14,'abc128@gmail.com','abc123123','莊鈞一','0923457225','1993-07-19','女','台北市大安區安和路一段29-1號',NULL,3,1),(15,'abc129@gmail.com','abc123123','林停佳','0911363525','1984-08-29','女','台北市大安區光復南路308巷45號',NULL,2,1),(16,'abc130@gmail.com','abc123123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'abc131@gmail.com','abc123123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'abc132@gmail.com','abc123123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MemberMsgs`
--

DROP TABLE IF EXISTS `MemberMsgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MemberMsgs` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `pushlishedTime` timestamp NOT NULL,
  `state` tinyint(1) NOT NULL,
  `content` varchar(150) NOT NULL,
  `MemberID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_menber_msgs_Member_idx` (`MemberID`),
  CONSTRAINT `FK_menber_msgs_MemberID` FOREIGN KEY (`MemberID`) REFERENCES `Member` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MemberMsgs`
--

LOCK TABLES `MemberMsgs` WRITE;
/*!40000 ALTER TABLE `MemberMsgs` DISABLE KEYS */;
INSERT INTO `MemberMsgs` VALUES (1,'2023-01-17 06:57:24',0,'我可以不在網上下單嗎？',1),(2,'2023-01-17 06:57:24',0,'我可以不在網上下單嗎？',1),(3,'2023-01-17 06:57:24',0,'上門廚師服務有最低消費嗎',2),(4,'2023-01-17 06:57:24',0,'我可以怎樣付款？',4),(5,'2023-01-17 06:57:24',0,'我是否一定要用信用卡付款? 可以銀行轉賑或支票付款嗎?',2),(6,'2023-01-17 06:57:24',0,'我可以取消預訂並退款嗎？',5),(7,'2023-01-17 06:57:24',0,'我的廚房要有什麼準備？',1),(8,'2023-01-17 06:57:24',0,'怎樣寫評價？',3),(9,'2023-01-17 06:57:24',0,'我需要清理廚房嗎？',4),(10,'2023-01-17 06:57:24',0,'預訂確認後，我還可以更改嗎？',1);
/*!40000 ALTER TABLE `MemberMsgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `News` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Category` varchar(10) NOT NULL,
  `Date` timestamp NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Article` varchar(300) NOT NULL,
  `IMG` varchar(50) NOT NULL,
  `Condition` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
INSERT INTO `News` VALUES (1,'最新動態','2023-01-05 01:21:46','冬季暖心','鮟鱇魚富含膠原蛋白且低脂肪熱量，味道鮮甜淡雅，是健康又美味的海水魚，被譽為人間極品珍饈，其貌不揚，卻富含膠原蛋白且低脂肪低熱量，可美肌防老還極其鮮美，簡單的魚湯料理就可以完美呈現媲美龍蝦肉的鮮甜Q彈。','url.....XXX',1),(2,'限時優惠','2023-01-05 01:21:46','秋季限定料理','私覓主理人與多位摯友於1989年參加一場私廚派對，於派對中享用的鮮美食材仍深刻於心，多年後再度憶起來當年的感動，私覓主理人與專業團隊共同開發秋季限定料理，希望再次復刻最初的感動。以鰹魚為食，輔以柑橘類的柚子醬『ポン酢』調味，再加一點梅子提味，提升整體的層次感。秋天的味蕾－松茸ごはん（松茸飯）」，使用昆布高湯，並將松茸與其他像是銀杏果等食材一同放進炊飯器煮。而秋天更不能錯過柿子、水梨，私覓嚴選千葉縣水梨，於前菜至主食期望帶給預約私覓的顧客，能和私覓主理人一同回到1989年的秋天，體驗這份私藏的心意。','url.....XXX',1),(3,'聯名限定','2023-01-05 01:21:46','開幕消息','日式私廚料理進軍台灣！隨著私廚料理進駐的消息一曝光，可是讓人又驚又喜，是極限挑戰台灣人飲食習慣的開關。不僅可以吃到道地且新鮮味美的海鮮，期間限定的口味也都讓人期待，選用來自日本的竹筴魚，油脂量4%以上，肉質爽口不油膩，獨特的香氣，絕對是可遇不可求 的美味。這波私人饗宴都要吃個過癮！','url.....XXX',0),(4,'最新動態','2023-01-05 01:21:46','夏季限定料理','在炎熱夏季期間到來的「土用丑日」。吃鰻魚滋補身體是一種自古留下的風俗。然而，所謂的「土用」，指的是立春、立夏、立秋、立冬前季節交替之際。而今，鰻魚被視為土用丑日的儀式食物，但其實在原本的傳說中，說的是食用「u」開頭的食材能預防夏日疲勞症候群。例如，改善食慾不振和生津解渴的「梅干」（umeboshi）。此外，先人們也靠著食用從體內排熱的「瓜類」（uri）和容易消化的「烏龍麵」（udon）等食物來度過炎熱的夏日。有別於此的，則有食用蜆貝、泥鰍、牛蒡等「黑色食材」的習俗。這是來自於掌控丑對應方位（北方）的靈獸「玄武」所代表的黑色。','url.....XXX',0),(5,'限時優惠','2023-01-05 01:21:46','精選獺祭-精碾二割三分','旭酒造每年都會用23%的山田錦釀造幾個酒槽，但在幾年前曾有相當數量的二割三分因為達不到我們所要求的水準而降等，訂單的數量卻比前一年增加許多。雖然很遺憾釀造上的不順利，但也因客戶的支持而感動，只好將數量不多的二割三分盡量分配給各訂戶。','url.....XXX',1),(6,'最新動態','2023-01-05 01:21:46','2022年度優惠','私覓致力提供優質溫潤的私人料理，提供主顧暖心的服務，目前推出壽星優惠『秋蟹吃到飽饗宴』，即日起也推出３大優惠，包含「春酒尾牙」方案，滿20位送2位免費用餐、40位送4位免費用餐，以此類推；至多80位，加購一人$100享紅酒無限暢飲！','url.....XXX',1);
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `AppointmentDate` date NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Count` int NOT NULL,
  `Condition` varchar(50) NOT NULL COMMENT '訂單封存, 訂單成立未付款\n訂單成立已付款,已完成售後服務',
  `Scheduled` varchar(10) NOT NULL COMMENT 'n預約時段\\n 11:00 ~ 14:00 午餐\n,\\n14:30 ~ 16:30, 下午茶\n\\n18:00 ~ 21:00\\ 晚餐\n',
  `Address` varchar(300) NOT NULL,
  `Date` timestamp NOT NULL,
  `TotalPrice` int NOT NULL,
  `notes` varchar(600) DEFAULT NULL,
  `point` int NOT NULL,
  `MemberID` int NOT NULL,
  `TeamID` int NOT NULL,
  `SetID` int NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_PrivateOrders_Member1_idx` (`MemberID`),
  KEY `fk_Orders_Team1_idx` (`TeamID`),
  KEY `FK_Orders_SetID_idx` (`SetID`),
  CONSTRAINT `FK_Orders_MemberID` FOREIGN KEY (`MemberID`) REFERENCES `Member` (`ID`),
  CONSTRAINT `FK_Orders_SetID` FOREIGN KEY (`SetID`) REFERENCES `Sets` (`ID`),
  CONSTRAINT `FK_Orders_TeamID` FOREIGN KEY (`TeamID`) REFERENCES `Teams` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (1,'2023-01-25','超級管理員',5,'訂單成立已付款','晚餐','台北市中山區八德路二段174巷5號','2023-01-18 17:43:39',40700,'測試資料格式吻合',33,1,2,2,'abc123@gmail.com','0915111111'),(2,'2023-01-25','黃金管理員',10,'訂單成立已付款','午餐','台中擎天崗玉水路140號3F','2023-01-18 17:51:25',116540,'請問可以多一點餐點服務嗎?\n例如可以取名XXX',100,1,1,3,'testgood@gmail','0921444232'),(3,'2023-01-25','吳建置',2,'訂單成立已付款','下午茶','台北市中山區建國北路一段74號','2023-01-18 17:54:06',16940,'台北市中山區建國北路一段74號\n有點遠唷~~',0,4,3,2,'abc126@gmail.com','0972567345'),(4,'2023-01-27','蔡雨停',7,'訂單成立已付款','午餐','台北市萬華區貴陽街二段116號','2023-01-18 18:01:13',62460,'訂單成立要花很多錢',3,14,3,2,'abc128@gmail.com','0916345675'),(5,'2023-01-31','傳說級管理員',12,'訂單成立已付款','下午茶','台中大都五感於井鳥','2023-01-18 18:05:21',82840,'希望有更多的服務，<br />\n更多優質商品與用餐體驗。',10,1,1,2,'tastesogoogle@gmail.com','0931321314'),(6,'2023-01-23','蔡樹均',1,'訂單成立已付款','下午茶','台北市中山區八德路二段174巷5號','2023-01-18 18:12:33',7600,'我家有點遠  請問會有其他特別服務嗎?<br />\n我想要連辦三天三夜的宴客...',0,2,3,1,'erice360@gmail.com','0931232132'),(7,'2023-01-31','超級有錢管理員',12,'訂單成立已付款','晚餐','台北市萬華區貴陽街二段116號多金皇后鎮(停車旁邊)','2023-01-18 18:16:55',84320,'有烤肉服務嗎~~~~?',0,1,3,2,'soRich@ed.com','0912343284'),(8,'2023-03-13','管理員',4,'訂單成立已付款','下午茶','字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它','2023-01-18 18:24:15',47540,'字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它字述灌爆它',0,1,1,3,'testErrror','0932394192');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrdersDetail`
--

DROP TABLE IF EXISTS `OrdersDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrdersDetail` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `qty` int NOT NULL,
  `price` int NOT NULL,
  `DishID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_OrderDetail_DishID_idx` (`DishID`),
  KEY `FK_OrderDetail_OrderID_idx` (`OrderID`),
  CONSTRAINT `FK_OrderDetail_DishID` FOREIGN KEY (`DishID`) REFERENCES `Dish` (`ID`),
  CONSTRAINT `FK_OrderDetail_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrdersDetail`
--

LOCK TABLES `OrdersDetail` WRITE;
/*!40000 ALTER TABLE `OrdersDetail` DISABLE KEYS */;
INSERT INTO `OrdersDetail` VALUES (1,1,3,0,18),(2,1,2,0,19),(3,1,2,0,20),(4,1,3,0,21),(5,1,5,0,22),(6,1,1,0,23),(7,1,2,0,24),(8,1,2,0,25),(9,1,1,0,26),(10,1,3,0,27),(11,1,1,0,28),(12,1,1,0,29),(13,1,1,0,30),(14,1,3,0,31),(15,1,2,500,48),(16,1,1,800,49),(17,1,2,800,50),(18,1,3,300,51),(19,1,2,240,52),(20,1,3,740,53),(21,1,4,300,56),(22,1,5,300,84),(23,1,5,300,85),(24,1,5,400,86),(25,1,5,500,87),(26,2,3,0,33),(27,2,7,0,34),(28,2,2,0,35),(29,2,8,0,36),(30,2,10,0,37),(31,2,5,0,38),(32,2,5,0,39),(33,2,1,0,41),(34,2,3,0,42),(35,2,6,0,43),(36,2,1,0,45),(37,2,2,0,46),(38,2,7,0,47),(39,2,1,500,48),(40,2,1,300,51),(41,2,1,240,52),(42,2,1,200,55),(43,2,1,300,56),(44,2,10,300,84),(45,2,10,300,85),(46,2,10,400,86),(47,2,10,500,87),(48,3,1,0,18),(49,3,1,0,19),(50,3,1,0,20),(51,3,1,0,21),(52,3,2,0,22),(53,3,1,0,23),(54,3,1,0,25),(55,3,1,0,27),(56,3,1,0,28),(57,3,1,0,30),(58,3,1,0,31),(59,3,1,800,49),(60,3,2,800,50),(61,3,3,300,51),(62,3,1,740,53),(63,3,1,500,54),(64,3,1,200,55),(65,3,2,300,84),(66,3,2,300,85),(67,3,2,500,87),(68,4,1,0,18),(69,4,6,0,19),(70,4,2,0,20),(71,4,5,0,21),(72,4,7,0,22),(73,4,2,0,23),(74,4,5,0,24),(75,4,1,0,26),(76,4,2,0,27),(77,4,4,0,28),(78,4,1,0,29),(79,4,1,0,30),(80,4,1,0,31),(81,4,4,0,32),(82,4,2,500,48),(83,4,2,800,49),(84,4,2,800,50),(85,4,2,240,52),(86,4,2,740,53),(87,4,36,300,56),(88,4,7,300,84),(89,4,7,300,85),(90,4,7,400,86),(91,4,7,500,87),(92,5,3,0,18),(93,5,9,0,19),(94,5,2,0,20),(95,5,10,0,21),(96,5,12,0,22),(97,5,4,0,24),(98,5,8,0,25),(99,5,2,0,26),(100,5,2,0,27),(101,5,8,0,28),(102,5,2,0,30),(103,5,3,0,31),(104,5,7,0,32),(105,5,2,800,49),(106,5,1,800,50),(107,5,1,300,51),(108,5,1,740,53),(109,5,2,500,54),(110,5,2,200,55),(111,5,12,300,84),(112,5,12,300,85),(113,5,12,400,86),(114,5,12,500,87),(115,6,1,0,1),(116,6,1,0,4),(117,6,1,0,5),(118,6,1,0,6),(119,6,1,0,9),(120,6,1,0,13),(121,6,1,500,48),(122,6,1,800,49),(123,6,1,800,50),(124,6,1,500,54),(125,6,1,200,55),(126,6,1,300,56),(127,6,1,300,84),(128,6,1,300,85),(129,6,1,400,86),(130,6,1,500,87),(131,7,4,0,18),(132,7,8,0,19),(133,7,2,0,20),(134,7,10,0,21),(135,7,12,0,22),(136,7,3,0,23),(137,7,2,0,24),(138,7,7,0,25),(139,7,2,0,26),(140,7,3,0,27),(141,7,7,0,28),(142,7,1,0,29),(143,7,1,0,30),(144,7,2,0,31),(145,7,8,0,32),(146,7,1,500,48),(147,7,2,800,49),(148,7,2,800,50),(149,7,2,300,51),(150,7,3,240,52),(151,7,2,200,55),(152,7,3,300,56),(153,7,12,300,84),(154,7,12,300,85),(155,7,12,400,86),(156,7,12,500,87),(157,8,2,0,33),(158,8,2,0,34),(159,8,2,0,35),(160,8,2,0,36),(161,8,4,0,37),(162,8,2,0,38),(163,8,1,0,39),(164,8,1,0,40),(165,8,2,0,41),(166,8,1,0,42),(167,8,1,0,43),(168,8,4,0,47),(169,8,2,800,49),(170,8,2,800,50),(171,8,1,740,53),(172,8,2,500,54),(173,8,1,200,55),(174,8,4,300,84),(175,8,4,300,85);
/*!40000 ALTER TABLE `OrdersDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `QA`
--

DROP TABLE IF EXISTS `QA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `QA` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ReleaseDate` date NOT NULL,
  `Category` varchar(10) NOT NULL,
  `QuestionContent` varchar(300) NOT NULL,
  `AnswerContent` varchar(300) NOT NULL,
  `Condition` tinyint(1) NOT NULL,
  `ModifyTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `QA`
--

LOCK TABLES `QA` WRITE;
/*!40000 ALTER TABLE `QA` DISABLE KEYS */;
INSERT INTO `QA` VALUES (1,'2023-01-05','預約流程','請問有限制用餐人數嗎？','沒有！一個人也可以享有專屬私廚服務唷',1,'2023-01-06 02:21:46'),(2,'2023-01-05','預約流程','請問有提供素食餐點嗎？','不好意思，目前暫無提供全素食餐點。',1,'2023-01-06 02:21:46'),(3,'2023-01-05','預約流程','請問廚師預約的時段有哪些呢？','預約流程中會顯示廚師們可預約的時段，透過行事曆也可以查看目前廚師們的空檔唷！',1,'2023-01-06 02:21:46'),(4,'2023-01-05','預約流程','請問提供租借服務有要加選什麼項目呢？','全額退款的最晚取消為當日到府服務的15天前（不含服務當天）10-14天內取消預約則退款70%不足10天則不予退款。(如欲政府發佈之天災狀況不在以上限制，可延期一次）',1,'2023-01-06 02:21:46'),(5,'2023-01-05','預約流程','請問可以預約半年後嗎？','目前僅開放當月及隔月的預約系統，如有特殊需求請透過聯繫我們洽詢呦',1,'2023-01-06 02:21:46'),(6,'2023-01-05','付款問題','請問可以分期付款嗎？','使用國泰世華銀行付款最高提供6期零利率！',1,'2023-01-06 02:21:46'),(7,'2023-01-05','付款問題','請問刷卡有優惠嗎？','使用國泰世華銀行付款，享5%紅利回饋，5人以上預約並享有春饗干貝/羔羊饗宴/思饗牛小排三擇一招待！',1,'2023-01-06 02:21:46'),(8,'2023-01-05','付款問題','請問預約付款期限？','收款帳號爲系統生成，在預約成立後會寄出付款信函，並提醒付款期限，通常爲3天時效',1,'2023-01-06 02:21:46'),(9,'2023-01-05','付款問題','請問忘記付款怎麼辦？','目前暫無提供重新付款系統，如遇該狀況再煩請重新下單謝謝！',1,'2023-01-06 02:21:46'),(10,'2023-01-05','付款問題','請問付款後想取消有期限嗎？','全額退款的最晚取消為當日到府服務的15天前（不含服務當天）10-14天內取消預約則退款70%不足10天則不予退款。(如欲政府發佈之天災狀況不在以上限制，可延期一次）',1,'2023-01-06 02:21:46'),(11,'2023-01-05','租借服務','請問租借的風格可以挑選嗎？','我們廚具皆與Crate&barrel品牌合作，皆是品質與風格保證的！可放心使用。',1,'2023-01-06 02:21:46'),(12,'2023-01-05','租借服務','請問可以超租嗎？','由於私廚服務以人頭計算，餐具份量也會依據訂餐人數做準備，如若需增加人數，請私訊客服協助修改訂單，謝謝。',1,'2023-01-06 02:21:46'),(13,'2023-01-05','租借服務','請問可以不要租借嗎？','訂單本身會包含租借Crate&barrel品牌合作的餐炊廚具，爲求維持私廚等級的服務品質，暫不提供取消服務，謝謝。',1,'2023-01-06 02:21:46'),(14,'2023-01-05','租借服務','請問租借服務有含餐具外的裝飾品嗎？','訂單僅含Crate&barrel品牌合作的餐炊廚具，其餘的需要麻煩客人自行準備唷！',1,'2023-01-06 02:21:46'),(15,'2023-01-05','租借服務','請問有場地租借服務嗎？','場地租借服務目前正在規劃中，敬請期待！',1,'2023-01-06 02:21:46');
/*!40000 ALTER TABLE `QA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sets`
--

DROP TABLE IF EXISTS `Sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sets` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SetPrice` int NOT NULL,
  `SetName` varchar(50) NOT NULL,
  `IMG` varchar(200) NOT NULL,
  `IntroIMG` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sets`
--

LOCK TABLES `Sets` WRITE;
/*!40000 ALTER TABLE `Sets` DISABLE KEYS */;
INSERT INTO `Sets` VALUES (1,3000,'名物 私套餐','img/reserve_img/reserve_set01.jpg','私覓帶你窺視日式廚藝的精妙，彷如遊歷日本美食之旅」為概念，匯集各式具代表性的料理，如壽司、生魚片、海鮮、燒烤、小缽、天婦羅、土瓶蒸、和菓子等，提供在優雅的日式氛圍中自在品嘗道地精緻和食。'),(2,5000,'極上 會席套餐','img/reserve_img/reserve_set02.jpg','以日式料亭的細膩手藝，一刀、一握、一杓為您烹調，體驗「先付、造身、壽司、揚物、烤物、炊合、食事」等演繹的12類主題、感受來自和風的料理與溫度。'),(3,10000,'苑 春堂套餐','img/reserve_img/reserve_set03.jpg','苑 春堂喻意春日裡的花園，如日式庭院般的百盤。彷如聽見富士山河間那潺潺的流水聲，從鮮嫩多汁的富山白蝦，並搭配濃郁的抹茶香與鮮香干貝，並在極具日本職人、製菓文化的甜品-和菓子中，感受到府私廚的浪漫');
/*!40000 ALTER TABLE `Sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teams`
--

DROP TABLE IF EXISTS `Teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teams` (
  `ID` int NOT NULL,
  `team` char(1) NOT NULL,
  `LederName` varchar(50) NOT NULL,
  `LederProfile` varchar(300) NOT NULL,
  `IMG` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teams`
--

LOCK TABLES `Teams` WRITE;
/*!40000 ALTER TABLE `Teams` DISABLE KEYS */;
INSERT INTO `Teams` VALUES (1,'A','厲燕山','人稱，平成末的日式料理專家\r，在冷熱料理中輕鬆切換，變化中不失和諧感\r，經典懷石風味的割烹料理彷如露天寫生一般\r，充滿藝術的氣息，一口一口的念念不忘，\r打斷你對日式料理的初想，給你獨一無二的念想。','img/chefteam_img/chef1.png'),(2,'B','菜雨停','秉持面對食材一心一意的嚴謹，翻轉著日系傳統經典的菜色與形式，加入過去師承的日式料理及兒時記憶中的懷舊滋味，細膩原味的正統和食，用心款待的感動時刻，讓每位客人，在最後都能帶著幸福、滿足的笑容離開。','img/chefteam_img/chef2.png'),(3,'C','吳薦痣','美味來自看不見的細節，料理人們日日嚴守和食之道，展現在對每道菜餚背後的細節與堅持，近百道和食料理，感受來自季節的風土與料理的溫度，全心傾注在這一份華麗、精緻、豪邁又平價的天丼料理中。','img/chefteam_img/chef3.png');
/*!40000 ALTER TABLE `Teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-19  2:30:26
