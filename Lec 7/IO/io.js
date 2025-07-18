const fs = require('fs');

function read(readFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(readFile, "utf-8", (err, data) => {
            if (err) {
                console.log("Read error:", err);
                return reject(err); // <-- Reject the promise properly
            }
            try {
                const users = JSON.parse(data);
                resolve(users);
            } catch (parseError) {
                console.log("JSON parse error in:", readFile);
                reject(parseError);
            }
        });
    });
}

function write(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, err => {
            if (err) {
                console.log("Write error:", err);
                return reject(err);
            }
            resolve("users written");
        });
    });
}

module.exports = { read, write };