import React, { FC } from 'react';

type Props = {
  OnClickCancle: () => void;
};

export const SelectedBox: FC<Props> = ({ children, OnClickCancle }) => {
  return (
    <div className="selectedBox">
      <button className="selectedBox-button" type="button" onClick={OnClickCancle}>
        {children}
      </button>
    </div>
  );
};
