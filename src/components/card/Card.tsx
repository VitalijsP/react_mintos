import './card.scss';

import React, { FC } from 'react';

export const Card: FC = ({ children }) => {
  return (
    <div className="card">
      <div className="row center-xs">
        <div className="col-xs-4">{children}</div>
      </div>
    </div>
  );
};
