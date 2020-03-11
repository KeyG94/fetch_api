// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

document.getElementById("get-btn").addEventListener("click", getText);
document.getElementById('get-user').addEventListener("click", getUser);
document.getElementById('get-api').addEventListener("click", getAPI);
document.getElementById('addPost').addEventListener("submit", addPost);


// function getText(){
//     fetch('sample.txt')
//     .then(function(response){
//         return response.text()
//     })
//     .then(function(data){
//         console.log(data)
//     });
// }

// get data

function getText() {
    fetch("sample.txt")
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
};

// Getting json data and displaying it when button is clicked
function getUser() {
    fetch("user.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>User</h2>';
            data.forEach(function (user) {
                output += `
            <ul>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Car: ${user.car}</li>
            </ul>
            `
            })
            document.getElementById('output').innerHTML = output;
        })
};

//Getting api data from a web server, then listing it

function getAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            let output = '<h1>Posts</h1>';
            data.forEach(function (post) {
                output += `        <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`
            })
            document.getElementById('output').innerHTML = output;
        })
};

// posting the entry to the api web server
function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*,',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({ title:title, body:body})
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}