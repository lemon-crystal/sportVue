-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3307
-- Generation Time: 2018-01-17 03:36:04
-- 服务器版本： 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `n1sport`
--

-- --------------------------------------------------------

--
-- 表的结构 `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
`id` bigint(20) NOT NULL COMMENT '主键',
  `iconname` tinytext,
  `phonenumber` char(13) NOT NULL,
  `password` char(16) NOT NULL,
  `iconimg` text,
  `signature` text
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `userinfo`
--

INSERT INTO `userinfo` (`id`, `iconname`, `phonenumber`, `password`, `iconimg`, `signature`) VALUES
(1, 'sophie', '13109876543', '00000', NULL, '苏菲玛索更改again'),
(2, '浅浅', '15609876543', '11111', NULL, '自己的选择不要后悔，虽然我老后悔'),
(3, 'baby', '13208536416', '09085', NULL, NULL),
(5, '缘浅', '15600622761', 'song1994', NULL, '纠结的我！！！勇敢一次吧！大不了再战！'),
(6, '丽丽', '18202520470', '75369', NULL, '丽丽手机号'),
(7, '璐璐', '18930962691', '12345', NULL, '璐璐');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
