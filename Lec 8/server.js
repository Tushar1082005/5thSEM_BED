const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log(req);
    // res.send('Hello, World!');
    // res.send("<h1> Hello world </h1>");
    res.json({
        name:"Nitesh",
        address:"Delhi",
        isLogin:true,
    })
});

// path parameter/variable
// 1.params

app.get("/users/:id", (req,res) => {
    console.log(req.params.id);
    let id = req.params.id;
    res.send(id);
});

app.get("/blogs", (req,res) => {
    console.log(req.query.title);
    res.send("got it")
});

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
});