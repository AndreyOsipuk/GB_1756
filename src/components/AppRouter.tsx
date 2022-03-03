import React, { FC } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Main } from './../pages/Main';
import { ChatList } from './ChatList/ChatList';
import { Chats } from './../pages/Chats/Chats';
import { AboutWithConnect } from '../pages/About';
import { Profile } from './../pages/Profile';
import { NotFound } from './../pages/NotFound';

export const AppRouter: FC = () => (
  <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/chats">
        <Route exact path="/chats" component={ChatList} />
        <Route path="/chats/:chatId" component={Chats} />
      </Route>
      <Route exact path="/about" component={AboutWithConnect} />
      <Route exact path="/profile" component={Profile} />
      <Route path="*" component={NotFound} />ƒ
    </Switch>
  </HashRouter>
);
