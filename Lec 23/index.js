const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(blogRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/G27DB")
  .then(() => console.log("Connected to MongoDB"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
