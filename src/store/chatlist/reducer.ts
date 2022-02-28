import { ADD_CHAT, DELETE_CHAT } from './actions';

export interface Chat {
  id: string;
  name: string;
}

export interface ChatAction {
  type: string;
  newChat?: Chat;
  chatId?: string;
}

const initialChatList: Chat[] = [];

export const chatListReducer = (
  state: Chat[] = initialChatList,
  action: ChatAction
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
