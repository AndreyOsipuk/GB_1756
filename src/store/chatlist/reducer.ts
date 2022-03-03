import { ADD_CHAT, DELETE_CHAT } from './actions';
import { Reducer } from 'redux';

export interface Chat {
  id: string;
  name: string;
}

export interface ChatAction {
  type: string;
  newChat: Chat;
  chatId: string;
}

const initialChatList: Chat[] = [];

export const chatListReducer: Reducer<Chat[], ChatAction> = (
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
