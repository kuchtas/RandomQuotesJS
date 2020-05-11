  var quotes;
  fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => quotes = data)
  .then(() => console.log(quotes)
  .catch(() => alert("Error fetching quotes from the API")));

  const button = document.querySelector('button');
  const quoteText = document.querySelector('.quoteText');
  const authorText = document.querySelector('.authorText');

  button.addEventListener('click', generateQuote);

  function generateQuote()
  {
    do{
        var index = Math.floor(Math.random() * quotes.length) 
    }while(quotes[index].text === quoteText.textContent)

    quoteText.textContent = quotes[index].text;

    if(quotes[index].author === null)
        authorText.textContent = '~ Unknown';
    else
        authorText.textContent = '~ ' + quotes[index].author;
  }