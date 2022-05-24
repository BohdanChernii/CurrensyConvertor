import React, { useState, useEffect } from 'react';
import Header from './header/Header.jsx';
import Calculator from './main/Calculator.jsx';
import fetchCurrencies from '../currenciesGateway.js';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetchCurrencies().then((res) => setCurrencies(res));
  }, []);

  return (
    <div className="page">
      <Header currencies={currencies} />
      <Calculator currencies={currencies} />
    </div>
  );
};
export default App;
