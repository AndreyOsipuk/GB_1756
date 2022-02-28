import React, { FC } from 'react';
import { Message } from '../../App';

interface MessageListProp {
  messages: Message[];
}

export const MessageList: FC<MessageListProp> = ({ messages }) => {
  console.log('messages', messages);
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};
