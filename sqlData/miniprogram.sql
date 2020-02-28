CREATE DATABASE miniprogram CHARSET = UTF8;
USE miniprogram;
--导出数据库：（亲测有效）
--1、win+R：cmd-->进入mysql/bin文件夹;
--2、mysqldump --column-statistics=0 -h localhost -u root -p miniprogram > db.sql
--创建用户表
CREATE TABLE miniprogram_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20) NOT NULL DEFAULT "",
  upwd VARCHAR(32) NOT NULL DEFAULT "",
  nname VARCHAR(20) NOT NULL DEFAULT "",
  phno VARCHAR(20) NOT NULL DEFAULT ""
);
SET
  NAMES GBK;
INSERT INTO miniprogram_user
VALUES
  (
    null,
    '909622852',
    123456,
    'xiange18',
    '15219033482'
  ),
  (
    null,
    '583780581',
    123456,
    'xiange',
    '18826489001'
  );
CREATE TABLE miniprogram_picture_resource(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    customType VARCHAR(20) NOT NULL DEFAULT "banner",
    busNo VARCHAR(100) NOT NULL DEFAULT "",
    pname VARCHAR(100) NOT NULL DEFAULT "",
    linkUrl VARCHAR(100) NOT NULL DEFAULT "",
    remark VARCHAR(300) NOT NULL DEFAULT "",
    status INT NOT NULL DEFAULT 1,
    orderBy INT NOT NULL DEFAULT 1
);