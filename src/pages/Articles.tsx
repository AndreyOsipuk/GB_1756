import { CircularProgress } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesThunk } from './../store/articles/actions';
import {
  selectArticles,
  selectLoading,
  selectError,
} from './../store/articles/selectors';

export const Articles: FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getFetchArticles = async () => {
    dispatch(getArticlesThunk());
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {error && <p>Ошибка запроса</p>}
      {loading && <CircularProgress />}
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <button onClick={getFetchArticles}>reload</button>
    </>
  );
};
