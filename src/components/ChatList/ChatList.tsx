import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Chat } from '../../store/chatlist/reducer';

interface ChatListProps {
  addChat: (value: string) => void;
  deleteChat: (id: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ addChat, deleteChat }) => {
  const [value, setValue] = useState('');
  const chatList = useSelector((state: { chatlist: Chat[] }) => state.chatlist);
  const handleClick = () => {
    addChat(value);
    setValue('');
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>add chat</button>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            <button onClick={() => deleteChat(chat.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
