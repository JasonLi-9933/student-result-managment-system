const express = require('express');
const router = express.Router();
const studentsControllers = require("../controllers/studentsControllers");

router.get("/all", studentsControllers.getAllStudents);
router.get("/names", studentsControllers.getAllStudentNames);
router.post("/add", studentsControllers.addNewStudent);

module.exports = router;