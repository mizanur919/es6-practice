const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = (allCountries) => {
    const countriesContainer  = document.getElementById('countries');
    // Using For Of
    // for(const country of allCountries){
    //     const p = document.createElement('p');
    //     p.innerText = `${country.name}`;
    //     countriesContainer.appendChild(p);
    // }

    // Using ForEach Loop
    allCountries.forEach(country => {
        const div = document.createElement('div');
        /////// System 01 ///////
        // const p = document.createElement('p');
        // const h2 = document.createElement('h2');
        // h2.innerText = `${country.name}`;
        // p.innerText = `${country.capital}`;
        // div.classList.add('country');
        // div.appendChild(h2);
        // div.appendChild(p);

        /////// System 02 ///////
        div.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button onclick="loadCountrByName('${country.name}')" type="button" class="btn btn-info">Details</button>`;
        div.classList.add('country');
        countriesContainer.appendChild(div);
    });
}

const loadCountrByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <p>Country Name: ${country.name}</p>
        <p>Capital: ${country.capital}</p>
        <p>Inshort: ${country.alpha2Code}</p>
        <p>Language: ${country.languages[0].name}</p>
        <img style="width:100px; height:auto" src="${country.flag}">
    `;
}