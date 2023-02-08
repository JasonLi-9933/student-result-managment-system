const express = require('express');
const router = express.Router();
const resultsControllers = require("../controllers/resultsControllers");

router.get("/all", resultsControllers.getAllResults);
router.post("/add", resultsControllers.addNewResult);

module.exports = router;
