const Student = require('../models/student');

exports.getAllStudents = (req, res) => {
  Student.getAllStudents()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}

exports.getAllStudentNames = (req, res) => {
  Student.getAllStudentNames()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}

exports.addNewStudent = (req, res) => {
  const { firstName, lastName, birthDate } = req.body;
  const newStudent = new Student(firstName, lastName, birthDate);
  newStudent
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}