import React, { useState } from 'react';
import './calculator.scss';
import CurrencyInput from './CurrencyInput.jsx';
const Calculator = ({ currencies }) => {
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');

  const arr = currencies.reduce((acc, item) => {
    acc['UAH'] = '1';
    acc[Object.values(item.ccy).join('')] = item.sale;
    return acc;
  }, []);

  console.log(arr);
  const handleAmountFromChange = (amountFrom) => {
    setAmountTo((amountFrom * arr[currencyTo]) / arr[currencyFrom]);
    setAmountFrom(amountFrom);
  };
  const handleCurrencyFromChange = (currencyFrom) => {
    setAmountFrom((amountFrom * arr[currencyTo]) / arr[currencyFrom]);
    setCurrencyFrom(currencyFrom);
  };
  const handleAmountToChange = (amountTo) => {
    setAmountFrom((amountTo * arr[currencyFrom]) / arr[currencyTo]);
    setAmountTo(amountTo);
  };
  const handleCurrencyToChange = (currencyTo) => {
    setAmountFrom((amountTo * arr[currencyFrom]) / arr[currencyTo]);
    setCurrencyTo(currencyTo);
  };
  return (
    <div className="calculator">
      <h2 className="calculator__title">
        Оберайте валюти які хочете конертувати
      </h2>
      <form className="calculator__form">
        <CurrencyInput
          amount={amountFrom}
          currencies={Object.keys(arr)}
          currency={currencyFrom}
          onAmountChange={handleAmountFromChange}
          onCurrencyChange={handleCurrencyFromChange}
        />
        <CurrencyInput
          amount={amountTo}
          currency={currencyTo}
          currencies={Object.keys(arr)}
          onAmountChange={handleAmountToChange}
          onCurrencyChange={handleCurrencyToChange}
        />
      </form>
    </div>
  );
};
export default Calculator;
