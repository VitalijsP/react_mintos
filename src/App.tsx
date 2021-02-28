import React, { useState } from 'react';

import { Box } from './components/box/Box';
import { BoxSelected } from './components/boxSelected/BoxSelected';
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
    <Card>
      <div className="row margin-bottom--30">
        {currencies.map(
          ({ label, isSelected }, index) =>
            isSelected && (
              <div className="col-xs-6 col-sm-4 col-md-4 margin-bottom--10" key={label}>
                <BoxSelected
                  label={label}
                  selected={isSelected}
                  onClickCancel={() => handleOnClickToggle(index)}
                />
              </div>
            )
        )}
      </div>
      <div className="row">
        {currencies.map(({ label, isSelected }, index) => (
          <div className="col-xs-12 col-sm-6  col-md-4 margin-bottom--10" key={label}>
            <Box
              label={label}
              selected={isSelected}
              onClickCancel={() => handleOnClickToggle(index)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default App;
