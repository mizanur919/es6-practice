const loader = document.getElementById('loader');
const searchResults = document.getElementById('search-results');

const searchPlayer = () =>{
    const searchBoxInput = document.getElementById('search-box');
    const searchText = searchBoxInput.value;

    // Clear Input Field
    searchBoxInput.value = "";
    
    // Load Data
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchPlayer(data.player))
}

const displaySearchPlayer = players =>{
    searchResults.textContent = '';
    players.forEach(player => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${player.strCutout}" onerror="this.onerror=null; this.src='default.png'" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5>${player.strPlayer}</h5>
                        <p class="card-title">Nationality: ${player.strNationality}</p>
                        <p class="card-title">Club: ${player.strTeam}</p>
                        <p class="card-title">Kit: ${player.strKit}</p>
                        <p class="card-title">Born: ${player.dateBorn}</p>
                        <p class="card-title">Position: ${player.strPosition}</p>
                        <p class="card-title">Height: ${player.strHeight}</p>
                    </div>
                </div>
            </div>
        `;
        searchResults.appendChild(div);
    })
}