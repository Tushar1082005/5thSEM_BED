let todo ={
    id:3435435,
    title:"Todo 1",
}

let ul = document.querySelector('.todoList');
function addTodo(){
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
    ul.appendChild(li);
     
}

addTodo();