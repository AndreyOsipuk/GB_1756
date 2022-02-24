import React, { FC, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './pages/Main';
import { Provider } from 'react-redux';

// const Chats = React.lazy(() =>
//   import('./pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );
import { Chats } from './pages/Chats/Chats';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeContext, defaultState } from './utils/ThemeContext';
import { Profile } from './pages/Profile';
import { store } from './store/index';

export const App: FC = () => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <Provider store={store}>
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
                  <Redirect to="/chats/1" />
                </Route>
                <Route path="/chats/:chatId" component={Chats} />
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/profile" component={Profile} />
              <Route path="*" component={NotFound} />ƒ
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThemeContext.Provider>
    </Provider>
  );
};
