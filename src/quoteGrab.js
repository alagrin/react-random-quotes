const API_KEY = 'OqhHWrDT_4T6zLqsQlq76AeF';

export default async function getQuote() {
    //use fetch with proper endpoint, api key as well
  return fetch(`http://quotes.rest/quote/random.json?api_key=${API_KEY}`, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        return response.json()
    }).then(data => {
        let quote = data.contents.quote;
        return quote;
    });
}