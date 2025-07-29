//accessing dom elements

//1. by id

let res = document.getElementById("mydiv")
console.log(res)
console.dir(res)

//2. using class
let h2= document.getElementsByClassName('h2')  //list collecctions
console.log(h2[0])

//3. tag name
let tag = document.getElementsByTagName('p')
console.log(tag)

//4. by query selector
let query = document.querySelector("#mydiv") //object
console.log(query)

let queryall = document.querySelectorAll('p') //collection
console.log(queryall)

// document properties
//1.  accessing element content and change it 
//* inner html
console.log(res.innerHTML); //getter
// res.innerHTML = <p>change using dom manipulation</p> //setter

//* innerText
console.log(res.innerText); 
res.innerText = "hello world" //setter

//* textContent

// accessing element class or id or etc.
//1. getAttribute
console.log(res.getAttribute("id"));
let btn = document.querySelector(".btn");


//2. only for class attribute
//* classList
let myH = document.querySelector(".myH");
console.log(myH.classList);
myH.classList.add("newClass"); //add class
myH.classList.remove("myh"); //remove class
let form = document.querySelector(".signup");
btn.addEventListener("click", () => {
   // myH.classList.toggle("hide"); //toggle class
    form.classList.toggle("hide");
});


