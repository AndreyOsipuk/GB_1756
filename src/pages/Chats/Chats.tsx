import React, { FC, useCallback, useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { useParams, Redirect } from 'react-router-dom';
// import { WithExtraInfo } from '../HOC/WithExtraInfo';
import { WithClasses } from '../../HOC/WithClasses';

import style from './Chats.module.css';
import { ChatList } from '../../components/ChatList/ChatList';
import { Messages } from '../../App';

interface ChatProps {
  messages: Messages;
  setMessages: (
    message: Messages | ((prevState: Messages) => Messages)
  ) => void;
  addChat: (value: string) => void;
  deleteChat: (id: string) => void;
}

export const Chats: FC<ChatProps> = ({
  messages,
  setMessages,
  addChat,
  deleteChat,
}) => {
  const { chatId } = useParams<{ chatId?: string }>();
  // const MessageListWithExtra = WithExtraInfo(MessageList);
  const MessageListWithClass = WithClasses(MessageList);
  // const FormWithClasses = WithClasses(Form);

  const handleSendMessage = useCallback(
    ({ text, author }: { text: string; author: string }) => {
      if (chatId) {
        setMessages((prevMessages) => {
          return {
            ...prevMessages,
            [chatId]: [
              ...prevMessages[chatId],
              {
                id: nanoid(),
                author,
                text,
              },
            ],
          };
        });
      }
    },
    [chatId, setMessages]
  );

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length &&
      messages[chatId][messages[chatId].length - 1].author === 'User'
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

  if (chatId && !messages[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <ChatList addChat={addChat} deleteChat={deleteChat} />

      {/* <MessageListWithExtra
        messages={messages[`chat${chatId}`]}
        extraInfo="test"
      /> */}
      <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      />
      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <Form addMessage={handleSendMessage} />
      {/* <FormWithClasses addMessage={handleSendMessage} classes={style.border} /> */}
    </>
  );
};
