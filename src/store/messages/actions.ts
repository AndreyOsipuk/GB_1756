import { Dispatch } from 'redux';
import { AUTHORS } from './../../constants';
import { AddMessage, MessageUser, CreateMessageChat } from './types';

export const ADD_MESSAGE = 'MEDDSAGES::ADD_MESSAGE';
export const CREATE_MESSAGE_CHAT = 'MEDDSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGE_CHAT = 'MEDDSAGES::DELETE_MESSAGE_CHAT';

export const addMessage = (message: MessageUser): AddMessage => ({
  type: ADD_MESSAGE,
  text: message.text,
  author: message.author,
  chatId: message.chatId,
});

export const createMessageChat = (chatId: string): CreateMessageChat => ({
  type: CREATE_MESSAGE_CHAT,
  chatId,
});

export const deleteMessageChat = (chatId: string) => ({
  type: DELETE_MESSAGE_CHAT,
  chatId,
});

let timerId: NodeJS.Timeout;

export const addMessageWithThunk =
  (message: MessageUser) => (dispatch: Dispatch) => {
    dispatch(addMessage(message));

    if (message.author !== AUTHORS.bot) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(
        () =>
          dispatch(
            addMessage({
              chatId: message.chatId,
              text: 'I am bot',
              author: AUTHORS.bot,
            })
          ),
        1000
      );
    }
  };
