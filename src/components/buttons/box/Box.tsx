import React, { FC } from 'react';

type Props = {
  label: string;
  selected: boolean;
  OnClickToggle: () => void;
  //   onClickCancel: (id: number) => void;
};

export const Box: FC<Props> = ({ 
  label, selected, children, OnClickToggle
}) => {
  
  return (
    <div className="box">
      <button className="box-button" type="button" onClick={() => OnClickToggle()}>
        {children}
      </button>
    </div>
  );
};
