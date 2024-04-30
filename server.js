const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("colors");
const teacher = require("./routes/teacher");
const connectDB = require("./dbinit");

connectDB();
//usual middelware
app.use(express.json());
app.use(cors());

//form submission
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});
app.use("/api/teachers", teacher);
app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`.rainbow);
});
