const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    try{
    let email = req.body.email;
    let password = req.body.password;
    console.log(email, password);
    res.json({
        message:"user added successfully",
        data:{
            email,
            password
        }
    })
    } 
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }

});

app.listen(3333, () => {
    console.log("Server started");
});
