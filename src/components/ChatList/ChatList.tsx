import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Chat } from '../../store/chatlist/types';
import { nanoid } from 'nanoid';
import { addChat, deleteChat } from './../../store/chatlist/actions';
import { createMessageChat } from '../../store/messages/actions';
import { deleteMessageChat } from './../../store/messages/actions';

export const ChatList: FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const chatList = useSelector((state: { chatlist: Chat[] }) => state.chatlist);

  const handleAddChat = () => {
    const id = nanoid();
    dispatch(addChat({ id, name: value }));
    dispatch(createMessageChat(id));
    setValue('');
  };

  const handleDeleteChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessageChat(chatId));
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddChat}>add chat</button>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            <button onClick={() => handleDeleteChat(chat.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
