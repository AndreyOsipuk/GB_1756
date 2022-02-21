import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './pages/Main';

// const Chats = React.lazy(() =>
//   import('./pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );
import { Chats } from './pages/Chats';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';

export const App: FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/chats">
            <Redirect to="/chats/1" />
          </Route>
          <Route path="/chats/:chatId" component={Chats} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
