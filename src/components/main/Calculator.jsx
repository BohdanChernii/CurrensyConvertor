import React, { useState } from 'react';
import './calculator.scss';
import { useLocation } from 'react-router-dom';

import CurrencyInput from './CurrencyInput.jsx';

const Calculator = ({ currencies }) => {
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const convertingData = currencies.reduce((acc, item) => {
    acc['UAH'] = '1';
    acc[Object.values(item.ccy).join('')] = item.sale;
    return acc;
  }, []);

  const handleAmountFromChange = (amountFrom) => {
    setAmountTo(
      (amountFrom * convertingData[currencyTo]) / convertingData[currencyFrom]
    );
    setAmountFrom(amountFrom);
  };

  const handleCurrencyFromChange = (currencyFrom) => {
    setAmountFrom(
      (amountFrom * convertingData[currencyTo]) / convertingData[currencyFrom]
    );
    setCurrencyFrom(currencyFrom);
  };

  const handleAmountToChange = (amountTo) => {
    setAmountFrom(
      (amountTo * convertingData[currencyFrom]) / convertingData[currencyTo]
    );
    setAmountTo(amountTo);
  };

  const handleCurrencyToChange = (currencyTo) => {
    setAmountFrom(
      (amountTo * convertingData[currencyFrom]) / convertingData[currencyTo]
    );
    setCurrencyTo(currencyTo);
  };
  const data = Object.keys(convertingData).filter((item) => item != 'BTC');
  return (
    <div className="calculator">
      <h2 className="calculator__title">
        Оберайте валюти які хочете конертувати
      </h2>
      <form className="calculator__form">
        <CurrencyInput
          amount={amountFrom}
          currencies={data}
          currency={currencyFrom}
          onAmountChange={handleAmountFromChange}
          onCurrencyChange={handleCurrencyFromChange}
        />
        <CurrencyInput
          amount={amountTo}
          currency={currencyTo}
          currencies={data}
          onAmountChange={handleAmountToChange}
          onCurrencyChange={handleCurrencyToChange}
        />
      </form>
    </div>
  );
};
export default Calculator;
