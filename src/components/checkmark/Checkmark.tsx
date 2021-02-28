import React, { FC } from 'react';

import styles from './checkmark.module.scss';

type Props = {
  selected: boolean;
};

export const Checkmark: FC<Props> = ({ selected }) => {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.checkmark} ${selected ? styles.danger : ''}`}>✖</span>
    </div>
  );
};
