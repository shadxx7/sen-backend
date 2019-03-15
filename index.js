// Import Dependencies
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(helmet()); // Sanitization of requests
app.use(express.json()); // Parsing requests as in JSON format

//Use CORS
app.use(cors());

// Connect to database
mongoose.connect(process.env.DB_ADDRESS, { useNewUrlParser: true });
mongoose.set("debug", true);
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "MongoDB Error: "));
conn.on("connected", () => {
  console.log("Connected To Database...");
});

// Error handling
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error, Something Broke" });
});

// Start Server
const port = process.env.PORT;
app.listen(port, () => console.log("Server running on port", port, "..."));
