const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    // clear search field
    searchField.value = ''

    // error msg
    if(searchText == ''){
        // please write something to display
        alert('Please write something to display')
    }

    else{
        // api call for seach item or load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
        
    }

    
};

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result')

    // removing previous search result
    searchResult.textContent = '';

    // show error msg if the food item is not found
    if(meals.length == 0 ){
        // show no result found HW
    }
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col', 'd-flex', 'flex-column')
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="food-picture">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);   
    });
};

const loadMealDetails = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    
    // async await method

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])

    // fetch method 
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data.meals[0]))


};

const displayMealDetails = meal => {
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card', 'd-flex', 'flex-column')
    div.innerHTML = `
            <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div)

}

