const express = require('express');
const router = express.Router();
const { isLogin } = require('../middleware/middleware.js');
router.use(isLogin);

router.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "all blogs fetched"
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success: true,
        message: "one blog fetched"
    })
})

router.post("/",(req,res)=>{
    res.json({
        success: true,
        message: "all blogs fetched"
    })
})

module.exports = router; 