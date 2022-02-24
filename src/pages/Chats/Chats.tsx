import React, { FC, useCallback, useEffect, useState } from 'react';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { Link, useParams, Redirect } from 'react-router-dom';
// import { WithExtraInfo } from '../HOC/WithExtraInfo';
import { WithClasses } from '../../HOC/WithClasses';

import style from './Chats.module.css';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Messages {
  [key: string]: Message[];
}

const defaultMessages: Messages = {
  chat1: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
  chat2: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
  chat3: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
};

const chats = [
  {
    id: '1',
    name: 'чат 1',
  },
  {
    id: '2',
    name: 'чат 2',
  },
  {
    id: '3',
    name: 'чат 3',
  },
];

export const Chats: FC = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const { chatId } = useParams<{ chatId?: string }>();
  // const MessageListWithExtra = WithExtraInfo(MessageList);
  const MessageListWithClass = WithClasses(MessageList);

  const handleSendMessage = useCallback(
    ({ text, author }: { text: string; author: string }) => {
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [`chat${chatId}`]: [
            ...prevMessages[`chat${chatId}`],
            {
              id: nanoid(),
              author,
              text,
            },
          ],
        };
      });
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[`chat${chatId}`]?.length &&
      messages[`chat${chatId}`][messages[`chat${chatId}`].length - 1].author ===
        'User'
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            text: 'Im BOT',
            author: 'BOT',
          }),
        1000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages, chatId, handleSendMessage]);

  if (!messages[`chat${chatId}`]) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      {/* <MessageListWithExtra
        messages={messages[`chat${chatId}`]}
        extraInfo="test"
      /> */}
      <MessageListWithClass
        messages={messages[`chat${chatId}`]}
        classes={style.border}
      />
      {/* <MessageList messages={messages[`chat${chatId}`]} /> */}
      <Form addMessage={handleSendMessage} />
    </>
  );
};
