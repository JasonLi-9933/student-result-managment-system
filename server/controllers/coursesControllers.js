const Course = require("../models/course");

exports.addNewCourse = (req, res) => {
  const { courseName } = req.body;
  const newCourse = new Course(courseName);
  newCourse
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}

exports.getAllCourses = (req, res) => {
  Course.getAllCourses()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}