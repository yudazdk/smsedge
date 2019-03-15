-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2019 at 01:39 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smsedge`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `cnt_id` int(11) NOT NULL,
  `cnt_code` char(4) NOT NULL,
  `cnt_title` varchar(20) NOT NULL,
  `cnt_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`cnt_id`, `cnt_code`, `cnt_title`, `cnt_created`) VALUES
(1, 'UK', 'United Kingdom', '2019-03-14 04:20:50'),
(2, 'USA', 'United States', '2019-03-14 04:21:22'),
(3, 'IL', 'Israel', '2019-03-14 04:21:37');

-- --------------------------------------------------------

--
-- Table structure for table `numbers`
--

CREATE TABLE `numbers` (
  `num_id` int(11) NOT NULL,
  `cnt_id` int(11) NOT NULL,
  `num_number` varchar(15) NOT NULL,
  `num_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `numbers`
--

INSERT INTO `numbers` (`num_id`, `cnt_id`, `num_number`, `num_created`) VALUES
(1, 2, '3145291026', '2019-03-14 04:29:38'),
(2, 1, '516129977', '2019-03-14 04:30:12');

-- --------------------------------------------------------

--
-- Table structure for table `send_log`
--

CREATE TABLE `send_log` (
  `log_id` int(11) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `num_id` int(11) NOT NULL,
  `log_message` varchar(200) NOT NULL,
  `log_success` tinyint(4) NOT NULL,
  `log_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `send_log`
--

INSERT INTO `send_log` (`log_id`, `usr_id`, `num_id`, `log_message`, `log_success`, `log_created`) VALUES
(1, 1, 2, 'Success', 1, '2019-03-13 04:36:59'),
(2, 2, 1, 'Failed', 0, '2019-03-14 04:37:24'),
(3, 2, 2, 'Bla', 1, '2019-03-14 04:39:05'),
(4, 1, 2, 'sos', 0, '2019-03-14 08:03:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usr_id` int(11) NOT NULL,
  `usr_name` varchar(20) NOT NULL,
  `usr_active` tinyint(1) DEFAULT '0',
  `usr_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`usr_id`, `usr_name`, `usr_active`, `usr_created`) VALUES
(1, 'yudazdk', 1, '2019-03-14 04:28:32'),
(2, 'adir1', 1, '2019-03-14 04:28:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`cnt_id`);

--
-- Indexes for table `numbers`
--
ALTER TABLE `numbers`
  ADD PRIMARY KEY (`num_id`);

--
-- Indexes for table `send_log`
--
ALTER TABLE `send_log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `usr_id` (`usr_id`),
  ADD KEY `num_id` (`num_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `cnt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `numbers`
--
ALTER TABLE `numbers`
  MODIFY `num_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `send_log`
--
ALTER TABLE `send_log`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
