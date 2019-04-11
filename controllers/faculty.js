const Faculty = require("../models/faculty");

exports.getFaculty = (req, res) => {
  console.log(req.params.facultyId);
  res.send(200).send("WIP");
};

exports.searchFaculty = (req, res) => {
  console.log(req.body);
  res.send(200).send("WIP");
};

exports.addFaculty = (req, res) => {
  console.log(req.body);
  res.send(200).send("WIP");
};

exports.updateFaculty = (res, req) => {
  console.log(req.body);
  res.send(200).send("WIP");
};

exports.deleteFaculty = (req, res) => {
  console.log(req.params);
  res.send(200).send("WIP");
};
