const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentsRoutes = require('./routes/studentsRoutes');
const coursesRoutes = require("./routes/coursesRoutes");
const resultsRoutes = require("./routes/resultsRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/students", studentsRoutes)
app.use("/api/courses", coursesRoutes)
app.use("/api/results", resultsRoutes);

app.listen(5000);
