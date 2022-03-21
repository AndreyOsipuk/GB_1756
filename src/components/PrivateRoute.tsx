import React, { useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

// export interface PrivateRouteProps extends RouteProps {
//   isAuth: boolean;
// }

const PrivateRoute: React.FC<RouteProps> = (routeProps) => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);

  return isAuth ? <Route {...routeProps} /> : <Redirect to="signin" />;
};

export default PrivateRoute;
