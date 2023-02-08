const express = require("express");
const router = express.Router();
const coursesControllers = require("../controllers/coursesControllers");

router.get("/all", coursesControllers.getAllCourses);
router.post("/add", coursesControllers.addNewCourse);

module.exports = router;
