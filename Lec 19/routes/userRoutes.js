const express = require("express");
const router = express.Router();
// const User = require('../model/user');

const { postAddUser, getAllUser } = require('../controller/userController');

router.post("/", postAddUser);

router.get("/", getAllUser);


module.exports=router