const College = require("../models/colleges");
const Admin = require("../models/administrators");

exports.addCollege = function(req, res) {
  Admin.create(req.body.admin)
    .then(admin => {
      College.create({
        name: req.body.college.name,
        location: {
          country: req.body.college.location.country,
          city: req.body.college.location.city
        },
        administrator: admin._id
      })
        .then(() => {
          res.status(200).send("Successfully added college & admin.");
        })
        .catch(err => {
          console.log(err);
          res.status(500).send("Something went wrong.");
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Something went wrong.");
    });
};

exports.updateCollege = (req, res) => {
  console.log(req.body);
  res.send(200).send("WIP");
};

exports.searchCollege = (req, res) => {
  console.log(req.params);
  res.send(200).send("WIP");
};

exports.getCollege = (req, res) => {
  console.log(req.params);
  res.send(200).send("WIP");
};

exports.deleteCollege = (req, res) => {
  console.log(req.params);
  res.send(200).send("WIP");
};
