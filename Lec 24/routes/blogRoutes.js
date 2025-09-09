const express = require("express");
const router = express.Router();
const { createBlog, getAllBlogs, getBlogById, deleteBlog } = require("../controllers/blogController");
const { isLogin } = require("../middleware/authMiddleware");

router.post("/blogs", isLogin, createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);
router.delete("/blogs/:blogId", isLogin, deleteBlog);

module.exports = router;
