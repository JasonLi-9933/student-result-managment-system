DROP TABLE IF EXISTS students;

CREATE TABLE students_result_management_system.students (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	fullname VARCHAR(100) GENERATED ALWAYS AS (CONCAT(firstname,' ',lastname)),
	birthdate DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;