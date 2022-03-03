import {
  ADD_MESSAGE,
  CREATE_MESSAGE_CHAT,
  DELETE_MESSAGE_CHAT,
} from './actions';

export interface Message {
  text: string;
  author: string;
}

export type MessageUser = Message & {
  chatId: string;
};

export type MessageState = Message & {
  id: string;
};

export type MessagesActions =
  | AddMessage
  | CreateMessageChat
  | DeleteMessageChat;

export interface MessagesState {
  [key: string]: MessageState[];
}

export type AddMessage = {
  type: typeof ADD_MESSAGE;
  text: string;
  author: string;
  chatId: string;
};
export type CreateMessageChat = {
  type: typeof CREATE_MESSAGE_CHAT;
  chatId: string;
};

export type DeleteMessageChat = {
  type: typeof DELETE_MESSAGE_CHAT;
  chatId: string;
};
