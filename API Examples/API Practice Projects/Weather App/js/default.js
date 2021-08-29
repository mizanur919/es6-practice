const inputData = document.getElementById('input-box');

const loadData = () =>{
    const inputTextData = inputData.value;
    // Clear Input Box
    inputData.value = '';
    //debugger;
    
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
