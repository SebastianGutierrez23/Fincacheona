-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: api_rest
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` varchar(10) NOT NULL,
  `nombre_producto` varchar(150) NOT NULL,
  `descripcion_producto` longtext NOT NULL,
  `precio_producto` decimal(15,2) NOT NULL,
  `foto_producto` varchar(300) NOT NULL,
  `id_categoria` varchar(2) NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL,
  `upload_date` datetime NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('010001','hamburguesa doble doble','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',9000.00,'/images/010001.JPG','01','hamburguesa','2018-05-28 21:39:17'),('010002','hamburguesa pollo','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',7000.00,'/images/010002.JPG','01','hamburguesa','2018-05-28 21:39:17'),('010004','hamburguesa doble queso','AppIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.le',7000.00,'/images/010004.JPG','01','hamburguesa','2018-05-28 21:39:17'),('020001','pollo apanado','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',9500.00,'/images/020001.JPG','02','pollo','2024-05-25 23:11:58'),('030003','cervezas artesanales','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',12500.00,'/images/pola.JPG','03','bebidas','2024-06-09 09:46:33'),('070000','empanada de carne','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',2500.00,'/images/cebolla.JPG','07','empanadas','2024-08-11 09:39:37'),('131313','mentas 9','dg sfsdf sdfsdffs',920.00,'./images/mentas.JPG','03','','2024-09-08 08:25:25'),('65678','cebolla','gdgdf',54.00,'/images/cebolla.JPG','80','','2024-09-08 11:51:08'),('690099','toamte choncto','toamte de guiso ',300.00,'/images/tomate.JPG','80','verduras','2024-09-19 10:09:47'),('777777','cosote54444','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',300.00,'/images/caramelos.JPG','99','golosinas','2024-11-13 16:40:11'),('990099','toamte choncto','toamte de guiso ',300.00,'/images/tomate.JPG','80','verduras','2024-09-08 11:49:55');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-07 10:10:07
