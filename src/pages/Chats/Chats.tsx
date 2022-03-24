import React, { FC } from 'react';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { Redirect, useParams } from 'react-router-dom';
import { WithClasses } from '../../HOC/WithClasses';

import style from './Chats.module.css';
import { ChatList } from '../../components/ChatList/ChatList';
import { useSelector } from 'react-redux';
import { selectMessages } from './../../store/messages/selectors';

export const Chats: FC<any> = ({ msgs }) => {
  const { chatId } = useParams<{ chatId?: string }>();
  const MessageListWithClass = WithClasses(MessageList);
  // const messages = useSelector(selectMessages);

  if (chatId && !msgs[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <MessageListWithClass
        messages={chatId ? msgs[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
