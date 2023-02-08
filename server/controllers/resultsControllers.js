const Result = require('../models/result');

exports.addNewResult = (req, res) => {
  const { courseName, studentName, score } = req.body;
  const newResult = new Result(courseName, studentName, score);
  newResult
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}

exports.getAllResults = (req, res) => {
  Result.getAllResults()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(null));
}