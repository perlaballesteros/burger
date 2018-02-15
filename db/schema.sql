DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id integer(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50) NULL,
    devoured BOOLEAN NULL DEFAULT 0
);

SELECT * FROM burgers;