import React, { FC } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Main } from './../pages/Main';
import { ChatList } from './ChatList/ChatList';
import { Chats } from './../pages/Chats/Chats';
import { AboutWithConnect } from '../pages/About';
import { Profile } from './../pages/Profile';
import { NotFound } from './../pages/NotFound';
import { Articles } from './../pages/Articles';
import { SignIn } from './../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter: FC = () => (
  <HashRouter>
    <NavBar />
    <Switch>
      <PublicRoute restricted={false} exact path="/" component={Main} />
      <PrivateRoute path="/chats">
        <Route exact path="/chats" component={ChatList} />
        <Route path="/chats/:chatId" component={Chats} />
      </PrivateRoute>
      <PublicRoute
        restricted={false}
        exact
        path="/about"
        component={AboutWithConnect}
      />
      <PublicRoute
        restricted={false}
        exact
        path="/profile"
        component={Profile}
      />
      <PublicRoute
        restricted={false}
        exact
        path="/articles"
        component={Articles}
      />
      <PublicRoute restricted={true} exact path="/signin" component={SignIn} />
      <Route path="*" component={NotFound} />ƒ
    </Switch>
  </HashRouter>
);
