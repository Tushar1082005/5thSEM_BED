const User = require("../model/user");


module.exports.postAddUser = async (req, res) => {
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
}

module.exports.getAllUser = async(req, res) => {
    let users = await User.find();
    res.json({
        success: true,
        message: "all data fetched successfully",
        data:users
    })
}