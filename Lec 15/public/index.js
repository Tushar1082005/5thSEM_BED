const signupForm = document.getElementById('signup');
const email = document.getElementById('email');
const password = document.getElementById('password');

function addUser(email,password){
    let newUser = {
        email: email,
        password: password
    };
    fetch("/adduser",{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "content-Type": "application/json"
        }
    }).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        if(data.success){
            alert(data.message);
            signupForm.reset();
        } else {
            alert(data.error);
            signupForm.reset();
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}

signupForm.addEventListener("submit",function(e){
    e.preventDefault();
    addUser(email.value, password.value);
})