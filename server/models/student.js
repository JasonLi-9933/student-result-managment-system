const db = require("../db/db");

class Student {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  save() {
    const query = `INSERT INTO students (firstname, lastname, birthdate) VALUES ('${this.firstName}', '${this.lastName}', '${this.birthDate}')`;
    return constructPromiseFromQuery(query);
  }

  static getAllStudentNames() {
    const query = `SELECT fullname FROM students`;
    return constructPromiseFromQuery(query);
  }

  static getAllStudents() {
    const query = `SELECT * FROM students`;
    return constructPromiseFromQuery(query);
  }
}

const constructPromiseFromQuery = query => {
    return new Promise((resolve, reject) => {
      db.execute(query, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      })
    })
}

module.exports = Student;
