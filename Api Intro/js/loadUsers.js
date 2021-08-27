function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => loadData(json));
}
loadUsers();
function loadData(allUsers){
    const users = document.querySelector('users table');
    for(const user of allUsers){
        users.innerHTML = `
        <tbody>
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
          </tr>
        </tbody>
        `;
    }
}