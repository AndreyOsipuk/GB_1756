import {
  ADD_MESSAGE,
  CREATE_MESSAGE_CHAT,
  DELETE_MESSAGE_CHAT,
} from './actions';
import { Reducer } from 'redux';
import { nanoid } from 'nanoid';
import { MessagesActions, MessagesState } from './types';

const initialChatList: MessagesState = {};

export const messagesReducer: Reducer<MessagesState, MessagesActions> = (
  state = initialChatList,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            text: action.text,
            author: action.author,
          },
        ],
      };
    }
    case CREATE_MESSAGE_CHAT: {
      return {
        ...state,
        [action.chatId]: [],
      };
    }
    case DELETE_MESSAGE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];

      return chats;
    }
    default: {
      return state;
    }
  }
};
