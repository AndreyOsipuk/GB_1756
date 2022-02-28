import { createStore, compose, combineReducers } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer, Chat } from './chatlist/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
}

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chatlist: chatListReducer,
  }),
  composeEnhancers()
);
