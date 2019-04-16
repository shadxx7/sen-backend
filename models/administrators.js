const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ["system", "college"]
    },
    college: String
  },
  { collection: "administators" }
);

module.exports = mongoose.model("Admin", adminSchema);
