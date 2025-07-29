let box = document.querySelector('#box');
let btn = document.querySelector('#btn');
let stop = document.querySelector('#stop');
let colors=["red","black","blue","green","yellow","orange","pink","purple","brown","grey"];
let id = null;

function generateRandomColor() {
    let index = Math.floor(Math.random() * 10);
    console.log(index);
    let randomColor = colors[index];
    console.log(randomColor);
    box.style.backgroundColor = randomColor;

}

btn.addEventListener('click', function() {
    id = setInterval(() => {
        generateRandomColor();
    },500)
});

stop.addEventListener('click', function() {
    if (id) {
        clearInterval(id);
    }
});