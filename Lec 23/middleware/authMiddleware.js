const jwt = require("jsonwebtoken");
const JWT_SECRET = "mySecretKey"; 

function isLogin(req, res, next) {
  let token = req.headers["authorization"];
  if (!token) {
    return res.json({ success: false, message: "No token provided" });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7); 
  }

  try {
    let decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; 
    next();
  } catch (err) {
    return res.json({ success: false, message: "Invalid token" });
  }
}

module.exports = { isLogin, JWT_SECRET };
