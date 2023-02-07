const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Student = require("./models/student");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/students/all", (req, res) => {
	Student.getAllStudents()
			.then((data) => res.status(200).send(data))
			.catch((err) => res.status(404).send(null));
});

app.post("/api/students/add", (req, res) => {
  const { firstName, lastName, birthDate } = req.body;
  console.log(firstName, lastName, birthDate);
  const newStudent = new Student(firstName, lastName, birthDate);
  newStudent
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
  // Student.getAllStudentNames();
});

app.listen(5000);
