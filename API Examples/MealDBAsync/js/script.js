const displayFoods = document.getElementById('display-Foods');

const searchFood = async () => {
    const searchInput = document.getElementById('search-food');
    const SearchText = searchInput.value;
    const noFoodFound = document.getElementById('food-not-found');
    // Clear Data
    if(searchInput.value == ''){
        const p = document.createElement('p');
        p.innerHTML = `
            <span>Search Your Food In Search Box</span>
        `;
        p.classList.add('text-center', 'text-warning')
        noFoodFound.appendChild(p);
        displayFoods.textContent = '';
    }
    else{
        // Load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displaySearchFoods(data);
        // fetch(url)
        // .then(response => response.json())
        // .then(data => displaySearchFoods(data.meals))
        noFoodFound.textContent = '';
    }
    searchInput.value = '';
}

const displaySearchFoods = meals => {
    ////////// Clear Existing Searched Data //////////
    // displayFoods.innerHTML = '';
    displayFoods.textContent = '';
    if(meals.length == 0){
        alert("Not Found");
        // const noFoodFound = document.getElementById('food-not-found');
        // const p = document.createElement('p');
        // p.innerHTML = `
        //     <span class="text-center">No Food Found</span>
        // `;
        // noFoodFound.appendChild(p);
    }

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col">
                <div onclick="loadFoodDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid rounded" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <button type="button" class="btn btn-light">Category: <span class="badge bg-secondary">${meal.strCategory}</span></button>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            </div>  
        `;
        displayFoods.appendChild(div);
    })
}
const loadFoodDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data);

    // fetch(url)
    // .then(response => response.json())
    // .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = mealDetail =>{
    const foodDetailsContainer = document.getElementById('food-details');
    foodDetailsContainer.textContent = ' ';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${mealDetail.strInstructions.slice(0, 130)}</p>
        </div>
    `;
    foodDetailsContainer.appendChild(div);
}





