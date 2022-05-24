import React from 'react';
import './header.scss';
const Header = ({ currencies }) => {
  return (
    <header className="header">
      <p className="header__logo">IToop100 Конвертер Валют</p>
      <div className="header__currencies">
        {currencies.map((currency) => (
          <div className="header__currencies-item" key={currency.ccy}>
            <p className="buy">
              купівля {currency.ccy} {currency.buy}
            </p>
            <p className="sell">
              продаж {currency.ccy} {currency.sale}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
};
export default Header;
