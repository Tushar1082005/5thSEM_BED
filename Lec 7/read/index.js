const fs = require('fs');
const { read } = require('../IO/io.js');

async function readUsers(){
    let users = await read("../users.txt");
    let users2 = await read("../users2.txt");
    console.log(users);
    console.log(users2);
}

readUsers();