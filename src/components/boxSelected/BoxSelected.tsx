import React, { FC } from 'react';

import styles from './boxSelected.module.scss';

type Props = {
  selected: boolean;
  label: string;
  onClickCancel: () => void;
};

export const BoxSelected: FC<Props> = ({ selected, label, onClickCancel }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <button
        type="button"
        // className={styles.button}
        className={`${styles.button} ${selected ? styles.dark : styles.dark}`}
        onClick={onClickCancel}
      >
        ✖
      </button>
    </div>
  );
};
