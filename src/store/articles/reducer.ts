import { ArticlesActions } from './types';
import { Reducer } from 'redux';
import { ERROR, LOADING, GET_ARTICLES } from './actions';

export interface ArticlesState {
  loading: boolean;
  error: boolean;
  articles: any;
}

const initialStateArticles: ArticlesState = {
  loading: false,
  error: false,
  articles: [],
};

export const articlesReducer: Reducer<ArticlesState, ArticlesActions> = (
  state = initialStateArticles,
  action
) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case GET_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default: {
      return state;
    }
  }
};
