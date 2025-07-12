let products = [
    { name: "samsung", amount: 20000 , quantity : 10 },
    { name: "iphone 16", amount : 100000 , quantity : 1 },

]

function buyProduct(product_name) {
  return new Promise((resolve, reject) => {
    let is_product = null;

    for (var i = 0; i < products.length; i++) {
      if (products[i].name === product_name) {
        is_product = products[i];
        break;
      }
    }

    if (!is_product) {
      reject("product not available");
    } else {
      resolve("available product");
    }
  });
}

// buyProduct( "iphone 16").then((data) => {
//     console.log(data)
// })

// .catch( (err) => {
//     console.log(err)
// })

let bank_balance = 1500;

function deductAmount(amount){

    return new Promise(( resolve , reject) => {

        if(amount < bank_balance ) return resolve( "amount deducted successfully, your current balance is " + (bank_balance - amount) );

        else{
            bank_balance -= amount;
            return reject("your account balance is low");
        }

    })

}


// deductAmount(300000).then((data) => {
//     console.log(data)
// })

// .catch((err) => {
//     console.log(err)
// })

// buyProduct("samsung").then( (data) => {
//     return deductAmount(100)
// }).then( (message) => {
//     console.log(message)
//     console.log("running promise chain")
// })

// .catch( (err) => {
//     console.log(err)
//     console.log("error in promise chain")
// })

async function myfunc(){
  try{
    let amount = await buyProduct("samsung")
    console.log(amount);
    let message = await deductAmount(100)
    console.log(message)
  }

  catch(err){
    console.log(err)
  }
}

console.log(myfunc());
console.log('start')
console.log('end')