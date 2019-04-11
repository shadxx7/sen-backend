const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: `User${this._id}`
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
    }
  },
  { collection: "administators" }
);

module.exports = mongoose.model("Administrators", adminSchema);
