const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url); // fetches the data
  const data = await response.json(); // data holds the info in the api (what is fetched)
  quote.innerHTML = data.content; // displays quote
  author.innerHTML = data.author; // displays author
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "-- by" +
      author.innerHTML
  );
}
