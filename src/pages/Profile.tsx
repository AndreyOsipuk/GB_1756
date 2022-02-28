import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { toggleVisible } from '../store/profile/actions';
import {
  getProfileVisible,
  getProfileName,
} from './../store/profile/selectors';

export const Profile = () => {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const name = useSelector(getProfileName, shallowEqual);
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
    </>
  );
};
