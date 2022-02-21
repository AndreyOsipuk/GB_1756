import React, { FC, useState } from 'react';

interface FieldProps {
  render: any;
}

export const Field: FC<FieldProps> = ({ children, render }) => {
  const [value, setValue] = useState('');

  const handleText = (ev: any) => {
    setValue(ev.target.value);
  };

  return render({ value, handleText });
};
