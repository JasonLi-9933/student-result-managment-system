const constructPromiseFromQuery = require('../util');

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

module.exports = Student;
