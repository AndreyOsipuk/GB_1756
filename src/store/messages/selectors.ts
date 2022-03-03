import { StoreState } from '..';

export function selectMessages(state: StoreState) {
  return state.messages;
}
