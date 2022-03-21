import { Dispatch } from 'redux';
import { apiUrl } from '../../constants';
export const LOADING = 'ARTICLES::LOADING';
export const ERROR = 'ARTICLES::ERROR';
export const GET_ARTICLES = 'ARTICLES::GET_ARTICLES';

export const getArticles = (articles: any) => ({
  type: GET_ARTICLES,
  articles,
});

export const fetchLoading = (loading: boolean) => ({
  type: LOADING,
  loading,
});

export const fetchError = (error: boolean) => ({
  type: ERROR,
  error,
});

export const getArticlesThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchLoading(true));
  dispatch(getArticles([]));
  dispatch(fetchError(false));

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('response not ok');
    }

    const articles = await res.json();
    dispatch(getArticles(articles));
  } catch (err) {
    dispatch(fetchError(true));
  } finally {
    dispatch(fetchLoading(false));
  }
};
