import React, { FC, Suspense } from 'react';
// const Chats = React.lazy(() =>
//   import('./pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );
import { AppRouter } from './components/AppRouter';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <AppRouter />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};
