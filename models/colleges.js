const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: {
        country: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        }
      },
      required: true
    },
    faculty: [
      {
        id: String
      }
    ],
    administrator: {
      type: String,
      required: true
    }
  },
  {
    collection: "colleges"
  }
);

module.exports = mongoose.model("College", collegeSchema);
