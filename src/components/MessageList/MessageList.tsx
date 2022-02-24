import React, { FC } from 'react';
import { Message } from '../../pages/Chats/Chats';

interface MessageListProp {
  messages: Message[];
  // extraInfo: string;
}

export const MessageList: FC<MessageListProp> = ({ messages }) => {
  // console.log(extraInfo)
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
