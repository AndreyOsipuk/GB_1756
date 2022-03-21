import React, { FC } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { StoreState } from '../store';
import { authProfile, toggleVisible } from '../store/profile/actions';
import {
  getProfileVisible,
  getProfileName,
} from './../store/profile/selectors';
import { RouteComponentProps } from 'react-router-dom';

export const Profile: FC<RouteComponentProps> = (props) => {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const name = useSelector(getProfileName, shallowEqual);
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <input
        type="checkbox"
        checked={visible}
        onChange={() => dispatch(toggleVisible)}
      />
      <p>{name}</p>
      {isAuth ? (
        <button onClick={() => dispatch(authProfile(false))}>signout</button>
      ) : (
        <button onClick={() => props.history.push('/signin')}>signin</button>
      )}
    </>
  );
};
