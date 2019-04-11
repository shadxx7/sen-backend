const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    college: {
      type: String,
      required: true
    },
    department: String,
    areaOfInterests: {
      type: [{ name: { type: String, required: true } }],
      required: true
    },
    publications: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        publishDate: Date,
        link: String
      }
    ],
    coursesTaught: [
      {
        name: { type: String, required: true },
        code: String
      }
    ],
    contactDetails: {
      emailId: String,
      phoneNo: {
        countryCode: { type: Number, required: true },
        Number
      },
      socialMedia: [{ name: String, link: String }]
    }
  },
  { collection: "faculty" }
);

module.exports = mongoose.model("Faculty", facultySchema);
