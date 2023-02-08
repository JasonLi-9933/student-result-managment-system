DROP TABLE IF EXISTS results;

CREATE TABLE students_result_management_system.results (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	coursename VARCHAR(50) NOT NULL,
	fullname VARCHAR(100) NOT NULL,
	score CHAR(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;