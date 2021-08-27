// arrow function fetch api

const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => diplayQuotes(data));
};


const diplayQuotes = (quote) => {
    const blockQuote = document.getElementById('quote');
   blockQuote.innerText = quote.quote
    // console.log(data)
}
