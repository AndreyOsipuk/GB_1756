import { ADD_CHAT, DELETE_CHAT } from './actions';
import { Reducer } from 'redux';
import { Chat, ChatActions } from './types';

const initialChatList: Chat[] = [];

export const chatListReducer: Reducer<Chat[], ChatActions> = (
  state = initialChatList,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return [...state, action.newChat];
    }
    case DELETE_CHAT: {
      return state.filter(({ id }) => id !== action.chatId);
    }
    default: {
      return state;
    }
  }
};
