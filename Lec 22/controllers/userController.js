const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../middleware/authMiddleware");

exports.registerUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let newUser = new User({
      email,
      password,
      blogs: []
    });

    await newUser.save();

    res.json({
      success: true,
      message: "User registered successfully",
      data: newUser
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  let user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ success: false, message: "Invalid email or password" });
  }

  let token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.json({
    success: true,
    message: "Login successful",
    token: token
  });
};
