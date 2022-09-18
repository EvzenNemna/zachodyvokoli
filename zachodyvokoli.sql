-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2022 at 10:20 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zachodyvokoli`
--

-- --------------------------------------------------------

--
-- Table structure for table `zachod`
--

CREATE TABLE `zachod` (
  `id` int(11) NOT NULL,
  `popis` varchar(20) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `zdarma` tinyint(1) NOT NULL,
  `vstupni_kod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zachod`
--

INSERT INTO `zachod` (`id`, `popis`, `latitude`, `longitude`, `zdarma`, `vstupni_kod`) VALUES
(1, 'zachod 1', 50.087152922158, 14.4236564237, 1, 0),
(2, 'zachod 2', 50.088777484004, 14.421950538766, 0, 1234),
(3, 'zachod 3', 50.088536556699, 14.419246872079, 0, 3222),
(4, 'zachod 4', 50.086960173878, 14.418603141916, 1, 0),
(5, 'zachod 5', 50.090278089664, 14.424976070535, 1, 0),
(6, 'zachod 6', 50.08970676369, 14.420072992456, 0, 2222),
(7, 'zachod 7', 50.0888945054, 14.424246509683, 1, 0),
(8, 'zachod 8', 50.085493884799, 14.420909841668, 1, 0),
(9, 'zachod 9', 50.089183615861, 14.418377836358, 0, 3456),
(10, 'zachod 10', 50.08547323252, 14.424182136667, 0, 9999);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zachod`
--
ALTER TABLE `zachod`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zachod`
--
ALTER TABLE `zachod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
