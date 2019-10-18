-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 14, 2019 at 05:10 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`name`, `address`, `id`) VALUES
('John', 'Highway 71', 2),
('swapan', 'jharkhsnd', 3),
('Amy', 'Apple st 652', 4),
('Michael', 'Canyon 123', 6),
('Sandy', 'Ocean blvd 2', 7),
('Betty', 'Green Grass 1', 8),
('Richard', 'Sky st 331', 9),
('Susan', 'One way 98', 10),
('Vicky', 'Yellow Garden 2', 11),
('Ben', 'Park Lane 38', 12),
('William', 'Central st 954', 13),
('Chuck', 'Main Road 989', 14),
('Viola', 'Sideway 1633', 15),
('Michelle', 'Blue Village 1', 16),
('req.body.name', 'req.body.address', 17),
(NULL, NULL, 18),
('rohan', 'jharkhand', 19),
(NULL, NULL, 25),
(NULL, NULL, 26),
(NULL, NULL, 27),
(NULL, NULL, 28);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
