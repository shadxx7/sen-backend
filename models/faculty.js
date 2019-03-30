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
    department: {
      type: String,
      required: false
    },
    areaOfInterests: {
      type: [{ name: { type: String, required: true } }],
      required: true
    },
    publications: {
      type: [
        {
          name: { type: String, required: true },
          description: { type: String, required: true },
          publishDate: { type: Date, required: false },
          link: { type: String, required: false }
        }
      ],
      required: false
    },
    coursesTaught: [
      {
        name: { type: String, required: true },
        code: { type: String, required: false }
      }
    ],
    contactDetails: {
      type: {
        emailId: { type: String, required: false },
        phoneNo: {
          type: { countryCode: { type: Number, required: true } },
          required: false
        },
        socialMedia: [{ name: String, link: String }]
      },
      required: false
    }
  },
  { collection: "faculty" }
);

module.exports = mongoose.model("Faculty", facultySchema);
