let todoInput = document.querySelector('.todotitle');
let todoForm = document.querySelector('#todoform');
let todoContainer = document.querySelector('.todoContainer');

let todoArray = [];
fetch("http://localhost:5555/todos")
.then(response => response.json())
.then((data)=>{
    todoArray = data; // Initialize todoArray with fetched todos
    showAllTodos(todoArray); // Display fetched todos
})

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    let value= inputValue();
    let newTodo={
        id:Math.floor(Math.random() * 10000),
        title: value
    }
    todoArray.push(newTodo);
    showAllTodos(todoArray);
    //addTodo(newTodo);
    todoInput.value = '';
})

function inputValue(){
    return todoInput.value;
}

function addTodo(todo){
    let li = document.createElement('li');
    li.setAttribute('id',`${todo.id}`);
    li.innerHTML = ` <div>
                    <input type="checkbox" name="" id="checkbox">
                    <h1>${todo.title}</h1>
                    <div>
                    <button class ="edit">Edit</button>
                    <button class ="delete">Delete</button>
                    <p> Lorem sjnsas w wjknjsdn wjn jsdns </p>
                    </div>
                    </div>`
    todoContainer.appendChild(li);
     
}

function showAllTodos(todoArray){
    todoContainer.innerHTML = ''; // Clear previous todos
    todoArray.forEach(todo => {
        addTodo(todo);
    });
}
