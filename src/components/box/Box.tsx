import React, { FC } from 'react';

import { Checkmark } from '../checkmark/Checkmark';
import styles from './box.module.scss';

type Props = {
  label: string;
  selected: boolean;
  onClickCancel: () => void;
};

export const Box: FC<Props> = ({ 
  label, selected, onClickCancel 
}) => {
  
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.button} ${selected ? styles.selected : ''}`}
        onClick={() => onClickCancel()}
      >
        <Checkmark selected={selected} />
        <span className={styles.label}>
          {label}
        </span>
      </button>
    </div>
  );
};
