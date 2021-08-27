const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(json => displayBuddies(json));
}
loadBuddies();
const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesContainer = document.getElementById("buddies");
    for(const buddy of buddies){
        console.log(buddy.name);
        const p = document.createElement("p");
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} \n Email: ${buddy.email}`;
        buddiesContainer.appendChild(p);
    }
}