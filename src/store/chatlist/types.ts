import { ADD_CHAT, DELETE_CHAT } from './actions';

export interface Chat {
  id: string;
  name: string;
}

export type ChatActions = AddChat | DeleteChat;

export interface AddChat {
  type: typeof ADD_CHAT;
  newChat: Chat;
}

export interface DeleteChat {
  type: typeof DELETE_CHAT;
  chatId: string;
}
