const fetchCurrencies = () =>
  fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  ).then((res) => res.json());
export default fetchCurrencies;
