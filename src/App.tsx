import React, { FC, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
// const Chats = React.lazy(() =>
//   import('./pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );
import { Chats } from './pages/Chats/Chats';
import { AboutWithConnect } from './pages/About';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeContext, defaultState } from './utils/ThemeContext';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList/ChatList';
import { addChat, deleteChat } from './store/chatlist/actions';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  const [dark, setDark] = useState(defaultState.dark);
  const [messages, setMessages] = useState<Messages>({});
  const dispatch = useDispatch();

  const toggleDark = () => {
    setDark(!dark);
  };

  const handleAddChat = (name: string) => {
    const id = nanoid();
    dispatch(addChat({ id, name }));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [id]: [],
    }));
  };

  const handleDeleteChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
    setMessages((prevMessages) => {
      const messages = { ...prevMessages };
      delete messages[chatId];
      return messages;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      <Suspense fallback={<div>Загрузка...</div>}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/chats">
              <Route exact path="/chats">
                <ChatList
                  addChat={handleAddChat}
                  deleteChat={handleDeleteChat}
                />
              </Route>
              <Route path="/chats/:chatId">
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  addChat={handleAddChat}
                  deleteChat={handleDeleteChat}
                />
              </Route>
            </Route>
            <Route exact path="/about" component={AboutWithConnect} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />ƒ
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ThemeContext.Provider>
  );
};
