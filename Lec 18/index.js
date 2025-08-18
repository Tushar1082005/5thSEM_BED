const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./model/blog');
const User = require('./model/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//create
app.post("/blogs", async(req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let userId = req.body.userId;
  let user = await User.findById(userId);
  if(!user) {
    return res.json({
      success: false,
      message: "Invalid User"
    });
  }

  let blog={
    title:title,
    body:body,
    date:Date.now(),
    userId:userId
  }
  let newBlog= new Blog(blog);
  await newBlog.save()
  user.blogs.push(newBlog._id);
  await user.save();
  res.json({
    success:true,
    message:"Blog added successfully",
    data:newBlog
  })
});  

app.delete("/blogs/:blogId",async(req,res) => {
  let blogId = req.params.blogId;
  let userId = req.body.userId;
  let blogExist = await Blog.findById(blogId);
  if(!blogExist) {
    return res.json({
      success: false,
      message: "Blog does not exist"
    });
  }
  if(blogExist.userId=userId){
    return res.json({
      success: false,
      message: "permission denied"
    })
  }
  await Blog.findByIdAndDelete(blogId);

})

// Create a new user
app.post("/users", async (req, res) => {
  try {
    let { name, email, password } = req.body; 

    let newUser = new User({
      name,
      email,
      password,
      blogs: [] 
    });

    await newUser.save(); 

    res.json({
      success: true,
      message: "User added successfully",
      data: newUser
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
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