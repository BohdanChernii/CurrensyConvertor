import React, { useState, useEffect } from 'react';
import Header from './header/Header.jsx';
import Calculator from './main/Calculator.jsx';
import History from './history/History.jsx';
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716902.73825444!2d28.93674654843873!3d48.31774868736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2z0KPQutGA0LDQuNC90LA!5e0!3m2!1sru!2sua!4v1654505526065!5m2!1sru!2sua"
        style={{ border: '0', width: '100%', height: '800px', margin: '5% 0' }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <History />
    </div>
  );
};
export default App;
