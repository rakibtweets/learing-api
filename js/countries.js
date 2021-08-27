const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()

// display function

const displayCountries = (countries) =>{

    const countryContainer = document.getElementById('countries')

    // forEach loop
    countries.forEach(country => {
        // creating elements
        const div = document.createElement('div')
        div.classList.add('country')
       
        div.innerHTML = `
        <h3>Country Name: ${country.name}</h3>
        <p>Capital : ${country.capital}</p>
        <button onclick = "loadCountryByName('${country.name}')">Details</button>
        `

        countryContainer.appendChild(div)
    });
};

const loadCountryByName = (name) => {
    const url = ` https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h3>Country Name: ${country.name}</h3>
    <p>Population : ${country.population}</p>
    <img width="150px" src="${country.flag}">
    
    `

}