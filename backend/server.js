const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
