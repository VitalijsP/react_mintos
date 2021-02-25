/* eslint-disable no-console */
import React, { useState } from 'react';

import { CURRENCIES } from './data/data';

const App = () => {
  const [currencies, setCurrencies] = useState(CURRENCIES);
  console.log('currencies', currencies);

  const onCheckboxChange = (id: number) => {
    const currenciesClone = [...currencies];
    // eslint-disable-next-line max-len
    currenciesClone[id].isSelected = !currenciesClone[id].isSelected;
    setCurrencies(currenciesClone);
  };

  // eslint-disable-next-line max-len
  const selectedCurrencies = currencies.filter(({ isSelected }) => isSelected);
  console.log('selectedCurrencies: ', selectedCurrencies);
  
  return (
    <div>
      <div className="container-top">
        {currencies.map(({ id, label, isSelected }) => {
          return (
            selectedCurrencies && (
              <div key={id}>
                <label htmlFor={label}>
                  <input
                    id={label}
                    type="checkbox"
                    name={label}
                    checked={isSelected}
                    onChange={() => onCheckboxChange(id)}
                  />
                  {label}
                </label>
              </div>
            )
          );
        })}
      </div>
      <div className="container-bottom">
        {currencies.map(({ id, label, isSelected }) => {
          return (
            <div key={id}>
              <label htmlFor={label}>
                <input
                  id={label}
                  type="checkbox"
                  name={label}
                  checked={isSelected}
                  onChange={() => onCheckboxChange(id)}
                />
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
