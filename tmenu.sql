-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Окт 16 2014 г., 16:17
-- Версия сервера: 5.5.38
-- Версия PHP: 5.3.10-1ubuntu3.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `iogv_mon`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tmenu`
--

CREATE TABLE IF NOT EXISTS `tmenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(30) DEFAULT NULL,
  `iconCls` varchar(25) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `leaf` varchar(5) DEFAULT NULL,
  `ut` int(11) DEFAULT NULL,
  `hrefTarget` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- Дамп данных таблицы `tmenu`
--

INSERT INTO `tmenu` (`id`, `text`, `iconCls`, `parent_id`, `leaf`, `ut`, `hrefTarget`) VALUES
(1, 'Действия', 'Folder', 0, 'false', 10, 'none'),
(2, 'Сообщения', 't_email', 0, 'false', 13, 'none'),
(3, 'Исходящие', 't_email-o', 2, 'true', 13, 'none'),
(4, 'Входящие', 't_email-i', 2, 'true', 13, 'none'),
(5, 'Услуги', 't_services', 1, 'true', 10, 'services'),
(6, 'Настройки', 't_settings', 1, 'true', 10, 'usersettings'),
(7, 'Справочники', 'book', 0, 'false', 11, 'none'),
(8, 'ИОГВ', 'table', 26, 'true', 0, 'iogv'),
(9, 'Перечень услуг', 'table', 26, 'true', 0, 'allservices'),
(10, 'Пользователи', 'table', 27, 'true', 0, 'users'),
(11, 'Отчёты', 'chart_bar', 0, 'false', 0, 'allreports'),
(12, 'Услуги', 'report', 11, 'true', 0, 'allreports'),
(13, 'ОМСУ', 'table', 26, 'true', 0, 'omsu'),
(14, 'Типы ведомств', 'table', 26, 'true', 0, 'orgtype'),
(15, 'Подразделения', 'table', 26, 'true', 0, 'allsubdivisions'),
(16, 'Подразделения', 'table', 26, 'true', 10, 'subdivisions'),
(18, 'Услуги', 'table', 26, 'true', 13, 'udirservices'),
(19, 'СМЭВ', 'smev', 1, 'true', 11, 'smev'),
(20, 'Категории сведений', 'table', 24, 'true', 0, 'categorysv'),
(21, 'ФОИВы', 'table', 24, 'true', 0, 'foivs'),
(22, 'Наименование сведений', 'table', 24, 'true', 0, 'information'),
(23, 'Варианты предоставления', 'table', 24, 'true', 0, 'variantsv'),
(24, 'СМЭВ', 'smev', 7, 'false', 0, 'none'),
(26, 'Услуги', 't_services', 7, 'false', 11, 'none'),
(27, 'Система', 'settings-dir', 7, 'false', 0, 'none');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
