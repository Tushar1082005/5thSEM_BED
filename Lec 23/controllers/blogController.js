const Blog = require("../model/blog");
const User = require("../model/user");

exports.createBlog = async (req, res) => {
  let userId = req.userId;
  let { title, body } = req.body;

  let user = await User.findById(userId);
  if (!user) return res.json({ success: false, message: "Invalid user" });

  let newBlog = new Blog({ title, body, date: Date.now(), userId });
  await newBlog.save();

  user.blogs.push(newBlog._id);
  await user.save();

  res.json({
    success: true,
    message: "Blog added successfully",
    data: newBlog
  });
};

exports.getAllBlogs = async (req, res) => {
  let allBlogs = await Blog.find();
  res.json({
    success: true,
    message: "All blogs fetched successfully",
    data: allBlogs
  });
};

exports.getBlogById = async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog
  });
};

exports.deleteBlog = async (req, res) => {
  let blogId = req.params.blogId;
  let userId = req.userId; // from token

  let blogExist = await Blog.findById(blogId);
  if (!blogExist) {
    return res.json({
      success: false,
      message: "Blog does not exist"
    });
  }

  if (blogExist.userId.toString() !== userId) {
    return res.json({
      success: false,
      message: "Permission denied"
    });
  }

  await Blog.findByIdAndDelete(blogId);
  res.json({
    success: true,
    message: "Blog deleted successfully"
  });
};
