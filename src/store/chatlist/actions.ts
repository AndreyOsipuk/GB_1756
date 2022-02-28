export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
import { Chat } from './reducer';
export const DELETE_CHAT = 'CHATLIST::DELETE_CHAT';

export const addChat = (newChat: Chat) => ({
  type: ADD_CHAT,
  newChat,
});

export const deleteChat = (chatId: string) => ({
  type: DELETE_CHAT,
  chatId,
});
