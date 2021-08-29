const inputData = document.getElementById('input-box');

const loadData = () =>{
    const inputTextData = inputData.value;
    // Clear Input Box
    inputData.value = '';
    //debugger;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputTextData}&appid=7f796a217d7786ab7a90a3f5194820d4`;
    fetch(url)
    .then(response => response.json())
    .then(json => displayAllData(json))
}

const displayAllData = allData =>{
    const showData = document.getElementById('show-data');
    for(const single of allData){
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.width = '18rem';
        div.innerHTML = `
            <h2>Weather Info of: ${single.name} City</h2>
        `;
        showData.appendChild(div);
    }
}