const constructPromiseFromQuery = require('../util');

class Result {
	constructor(courseName, studentName, score) {
		this.courseName = courseName;
		this.studentName = studentName;
		this.score = score;
	}

	save() {
		const query = `INSERT INTO results (coursename, fullname, score) VALUES ('${this.courseName}', '${this.studentName}', '${this.score}')`;
		return constructPromiseFromQuery(query);
	}

	static getAllResults() {
		const query = `SELECT * FROM results`;
		return constructPromiseFromQuery(query);
	}
}

module.exports = Result;