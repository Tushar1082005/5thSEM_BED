const express = require('express');
const app = express()
const port = 5000;

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));


// app.get('/', (req, res)=>{
//     res.sendFile(__dirname+"/index.html");    
// })

// app.get('/about.html', (req, res)=>{
//     res.sendFile(__dirname+"index.html");    
// })
app.post("/addUser", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    res.json({
        username,
        password
    })
})

app.listen(port, ()=>{
    console.log(`server started http:localhost:${port}`);
})

// Frontend files -> Static file