import { TOGGLE_PROFILE } from './actions';
import { Reducer } from 'redux';

export interface ProfileState {
  visible: boolean;
  name: string;
}

export interface ProfileAction {
  type: string;
}

const initialState: ProfileState = {
  visible: false,
  name: 'default name',
};

export const profileReducer: Reducer<ProfileState, ProfileAction> = (
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
    default: {
      return state;
    }
  }
};
