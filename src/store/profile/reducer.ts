import { AUTH_PROFILE, TOGGLE_PROFILE } from './actions';
import { Reducer } from 'redux';

export interface ProfileState {
  visible: boolean;
  name: string;
  isAuth: boolean;
}

export interface ProfileAction {
  type: string;
}

const initialState: ProfileState = {
  visible: false,
  name: 'default name',
  isAuth: false,
};

export const profileReducer: Reducer<ProfileState, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case AUTH_PROFILE: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    default: {
      return state;
    }
  }
};
