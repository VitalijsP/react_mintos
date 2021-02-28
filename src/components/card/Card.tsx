import React, { FC } from 'react';

import styles from './card.module.scss';

export const Card: FC = ({ children }) => {
  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-5">
          <div className={styles.wrapper}>
            <div className={styles.card}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
