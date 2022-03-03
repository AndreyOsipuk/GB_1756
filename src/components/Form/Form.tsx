import React, { useState, FC } from 'react';
import { Input, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessageWithThunk } from './../../store/messages/actions';
import { useParams } from 'react-router-dom';
import { AUTHORS } from '../../constants';

export const Form: FC = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams<{ chatId?: string }>();
  const [text, setText] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithThunk({
          chatId,
          text,
          author: AUTHORS.user,
        })
      );
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={text} onChange={(ev) => setText(ev.target.value)} />

      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};
