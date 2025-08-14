const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./model/blog');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//create
app.post("/blogs", async(req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let blog={
    title:title,
    body:body,
    date:Date.now()
  }
  let newBlog= new Blog(blog);
  await newBlog.save()
  res.json({
    success:true,
    message:"Blog added successfully",
    data:newBlog
  })
});  

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

app.listen(3000, () => {
  console.log('Server started');
});

app.get("/blogs", async(req, res) => {
    let allBlogs = await Blog.find();
    res.json({
        success: true,
        message: "all data fetched successfully",
        data:allBlogs
    })
})


app.get("/blogs/:id",async(req, res) => {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true,
        message: "Blog fetched successfully",
        data:blog
    })
})