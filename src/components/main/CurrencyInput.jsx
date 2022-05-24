import React from 'react';
import PropTypes from 'prop-types';
const CurrencyInput = ({
  amount,
  currencies,
  onCurrencyChange,
  onAmountChange,
  currency,
}) => {
  return (
    <div className="calculator__form-item">
      <input
        type="number"
        className="value"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        className="currency"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency, index) => (
          <option value={currency} key={currency + index}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
export default CurrencyInput;
