import { StoreState } from '..';

export function getProfileVisible(state: StoreState) {
  return state.profile.visible;
}

export function getProfileName(state: StoreState) {
  return state.profile.name;
}
