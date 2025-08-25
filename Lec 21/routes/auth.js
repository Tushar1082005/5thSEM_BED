const express = require("express");
const User = require("../models/user.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.json({ success: false, message: "Email already registered" });
    } else {
      let newUser = new User({ username, email, password });
      await newUser.save();
      res.json({ success: true, message: "User registered successfully" });
    }
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User not found" });
    } else {
      if (user.password === password) {
        res.json({ success: true, message: "Login successful", user: { username: user.username, email: user.email } });
      } else {
        res.json({ success: false, message: "Invalid password" });
      }
    }
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
