const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
const path = require("path");
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(blogRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/G27DB")
  .then(() => console.log("Connected to MongoDB"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

