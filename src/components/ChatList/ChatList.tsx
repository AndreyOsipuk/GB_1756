import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Chat } from '../../store/chatlist/types';
import { nanoid } from 'nanoid';
import {
  addChat,
  deleteChat,
  initChatsFB,
} from './../../store/chatlist/actions';
import { createMessageChat } from '../../store/messages/actions';
import { deleteMessageChat } from './../../store/messages/actions';
import { onValue, set, remove } from 'firebase/database';
import {
  chatsRef,
  getChatListById,
  getMessagesRefId,
} from './../../services/firebase';

export const ChatList: FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const chatList = useSelector((state: { chatlist: Chat[] }) => state.chatlist);

  useEffect(() => {
    dispatch(initChatsFB());
  }, []);

  const handleAddChat = () => {
    const id = nanoid();
    set(getChatListById(id), {
      id,
      name,
    });
    set(getMessagesRefId(id), {
      empty: true,
    });
    // dispatch(addChat({ id, name: value }));
    // dispatch(createMessageChat(id));
    setName('');
  };

  const handleDeleteChat = (chatId: string) => {
    remove(getChatListById(chatId));
    // dispatch(deleteChat(chatId));
    // dispatch(deleteMessageChat(chatId));
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
