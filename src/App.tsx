import React, { FC, useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { nanoid } from "nanoid";

export interface Message {
  id: string,
  text: string,
  author: string,
}

interface AppState {
  messages: Message[]
}

const defaultMessages = [
  {
    id: '1',
    author: "Geekbrains",
    text: "Welcome to the chat",
  },
];

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === 'User') {
      const timeout = setTimeout(() => addMessage({
        text: `I'm BOT`,
        author: 'BOT',
      }), 1000);

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages]);


  const addMessage = ({ text, author }: {text: string, author: string}) => {
    setMessages([
      ...messages,
      {
        id: nanoid(),
        author,
        text,
      },
    ]);
  };

  return (
    <>
      <h1>Welcome to react</h1>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
