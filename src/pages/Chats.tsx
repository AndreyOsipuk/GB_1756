import React, { FC, useCallback, useEffect, useState } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';

export interface Message {
  id: string;
  text: string;
  author: string;
}

const defaultMessages: any = {
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

export const Chats: FC = (props) => {
  const [messages, setMessages] = useState<any>(defaultMessages);
  const history = useHistory();
  const { chatId } = useParams();
console.log('props', props)
  if (chats.filter((chat) => chat.id === chatId).length === 0) {
    history.push('/');
  }

  useEffect(() => {
    if (
      messages[`chat${chatId}`].length &&
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
  }, [messages]);

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

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <MessageList messages={messages[`chat${chatId}`]} />
      <Form addMessage={handleSendMessage} />
    </>
  );
};
