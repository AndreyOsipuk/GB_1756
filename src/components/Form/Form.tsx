import React, { useState, FC, useContext } from 'react';
import { Input, Button } from '@mui/material';
import { ThemeContext } from '../../utils/ThemeContext';
interface Message {
  text: string;
  author: string;
}

interface FormProps {
  addMessage: (message: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const { dark, toggleDark } = useContext(ThemeContext);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleDark) {
      toggleDark();
    }
  };

  const [text, setText] = useState('');

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      text,
      author: 'User',
    });
    setText('');
  };

  return (
    <>
      <form onSubmit={handleText}>
        <Input value={text} onChange={(ev) => setText(ev.target.value)} />

        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>

      <h1>{dark ? '🌙' : '🌞'}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};
