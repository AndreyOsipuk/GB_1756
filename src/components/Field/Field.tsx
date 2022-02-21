import { FC, useState } from 'react';

interface Render {
  value: string;
  handleText: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
interface FieldProps {
  render: ({ value, handleText }: Render) => JSX.Element;
}

export const Field: FC<FieldProps> = ({ render }) => {
  const [value, setValue] = useState('');

  const handleText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return render({ value, handleText });
};
