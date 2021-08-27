const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response =>  response.json())
    .then(json => displayQuote(json))
}
const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');    
    blockQuote.classList.add("quoto");
    blockQuote.innerText = quote.quote;
}