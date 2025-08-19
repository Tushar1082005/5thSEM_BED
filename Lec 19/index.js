const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./model/blog');
const User = require('./model/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let blogRoutes = require('./routes/blogRoutes');
app.use("/api/blogs", blogRoutes);
let userRoutes = require('./routes/userRoutes');
app.use("/api/users", userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

app.listen(3000, () => {
  console.log('Server started');
});

