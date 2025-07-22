const express = require('express');
const app = express();
const { read, write } = require('./IO/index.js');

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;  
    console.log("Name:", name);
    console.log("Email:", email);

    res.json(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.json(req.body);

    async function writing() {
        try {
            await write("./Files/data.txt", JSON.stringify(req.body));
            console.log("Users written to file");
        } catch (err) {
            console.error("Error writing to file:", err);
        }
    }  
writing();

})