import React, { useState } from 'react';

import { Box } from './components/buttons/box/Box';
import { SelectedBox } from './components/buttons/selectedBox/SelectedBox';
import { Card } from './components/card/Card';
import { CURRENCIES } from './data/data';

const App = () => {
  const [currencies, setCurrencies] = useState(CURRENCIES);

  const handleOnClickToggle = (index: number) => {
    const currenciesClone = [...currencies];
    currenciesClone[index].isSelected = !currenciesClone[index].isSelected;
    setCurrencies(currenciesClone);
  };

  return (
    <div className="container">
      <Card>
        <div className="row">
          <div className="col-xs-4">
            {currencies.map(
              ({ label, isSelected }, index) =>
                isSelected && (
                  <SelectedBox 
                    key={label} 
                    OnClickCancle={() => handleOnClickToggle(index)}
                  >
                    <span>{label} x</span>
                  </SelectedBox>
                )
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            {currencies.map(({ label, isSelected }, index) => (
              <Box
                label={label}
                selected={isSelected}
                key={label}
                OnClickToggle={() => handleOnClickToggle(index)}
              >
                {label}
              </Box>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default App;
