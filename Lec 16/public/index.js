async function getCommentData() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(res.data);
    } catch (error) {
        console.log(error.message);
    }
}

getCommentData();

function adduser(email,password){
    axios.post("http://localhost:3333/user",{
        email: email,
        password: password
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

adduser("bansaltushar2020@gmail.com", "12345678");
