function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}

document.getElementById('load-users').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json));
});

document.getElementById('load-post').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(jsn => console.log(jsn.title));
})

function displayUsers(data){
    const users = document.getElementById('users');
    for(const user of data){
        const createElement = document.createElement('li');
        createElement.innerText = `Name: ${user.name} | Email: ${user.email}`;
        users.appendChild(createElement);
    }
}