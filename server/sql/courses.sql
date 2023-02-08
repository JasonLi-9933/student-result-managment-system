DROP TABLE IF EXISTS courses;

CREATE TABLE students_result_management_system.courses (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	coursename VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;