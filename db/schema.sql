DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(100) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);