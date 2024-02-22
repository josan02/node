-- Active: 1707903716804@@127.0.0.1@3306@userlogin
CREATE DATABASE if not EXISTS userLogin

USE userLogin

CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);




DESCRIBE users;

INSERT INTO users (nameUser, contrasena) VALUES('Jose Antonio', '12345');