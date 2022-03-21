import { StoreState } from '..';

export function selectArticles(state: StoreState) {
  return state.articles.articles;
}

export function selectError(state: StoreState) {
  return state.articles.error;
}

export function selectLoading(state: StoreState) {
  return state.articles.loading;
}
