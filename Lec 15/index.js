const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.post("/adduser", (req, res) => {
    try{
    let email = req.body.email;
    let password = req.body.password;
    
    let newuser = {
        email: email,
        password: password
    }
    console.log(email, password);
    
    res.json({
        success: true,
        data: newuser,
        message: "User added successfully"
    })
}

    catch(error){
        res.json({
            success: false,
            message: "Error adding user",
            error: error.message
        })
    }
})

app.listen(3000, () => {
    console.log("Server is Started");
})