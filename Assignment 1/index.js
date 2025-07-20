const fs = require('fs');

function buyProduct(username, productname) {
    fs.readFile('users.txt', 'utf8', (err, userData) => {
        if (err) return console.log('Error reading users.txt');

        const users = userData.split('\n').filter(u => u.trim() === username);
        if (users.length === 0) return console.log('User not found');

        fs.readFile('products.txt', 'utf8', (err, productData) => {
            if (err) return console.log('Error reading products.txt');

            const products = productData.split('\n').filter(p => p.trim() === productname);
            if (products.length === 0) return console.log('Product not found');

            let orders = [];
            if (fs.existsSync('orderHistory.json')) {
                const existingData = fs.readFileSync('orderHistory.json', 'utf8');
                if (existingData.trim()) {
                    orders = JSON.parse(existingData);
                }
            }

            orders.push({ username, product: productname });

            fs.writeFileSync('orderHistory.json', JSON.stringify(orders, null, 2));
            });
        });
}

const [,, user, product] = process.argv;
if (user && product) buyProduct(user, product);
else console.log('Usage: node index.js <username> <productname>');
