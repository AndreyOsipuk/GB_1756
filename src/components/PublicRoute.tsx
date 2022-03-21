import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export interface PublicRouteProps extends RouteProps {
  restricted: boolean;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  restricted,
  ...routeProps
}) => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);

  return isAuth && restricted ? <Redirect to="/" /> : <Route {...routeProps} />;
};
