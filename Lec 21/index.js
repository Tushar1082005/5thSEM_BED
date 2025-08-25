const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
