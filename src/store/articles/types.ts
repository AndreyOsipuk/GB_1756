import { ERROR, GET_ARTICLES, LOADING } from './actions';

export type ArticlesActions = GetArticles | FetchLoading | FetchError;

export interface GetArticles {
  type: typeof GET_ARTICLES;
  articles: any;
}

export interface FetchLoading {
  type: typeof LOADING;
  loading: boolean;
}

export interface FetchError {
  type: typeof ERROR;
  error: boolean;
}
