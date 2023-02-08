const constructPromiseFromQuery = require('../util');

class Course {
	constructor(courseName) {
		this.courseName = courseName;
	}

	save() {
		const query = `INSERT INTO courses (coursename) VALUES ('${this.courseName}')`;
		return constructPromiseFromQuery(query); 
	}

	static getAllCourses() {
		const query = `SELECT coursename FROM courses`;
		return constructPromiseFromQuery(query);
	}
}

module.exports = Course;