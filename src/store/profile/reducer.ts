import { TOGGLE_PROFILE } from './actions';
import { Reducer, Action } from 'redux';

export interface RootState {
  visible: boolean;
  name: string;
}

const initialState: RootState = {
  visible: false,
  name: 'default name',
};

export const profileRefucer: Reducer<RootState, Action> = (
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
