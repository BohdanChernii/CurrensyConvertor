import React, { useState, useEffect } from 'react';
import Header from './header/Header.jsx';
import Calculator from './main/Calculator.jsx';
const App = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((res) => res.json())
      .then((res) => setCurrencies(res));
  }, []);

  return (
    <div className="page">
      <Header currencies={currencies} />
      <Calculator currencies={currencies} />
    </div>
  );
};
export default App;
