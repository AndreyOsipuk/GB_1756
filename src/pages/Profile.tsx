import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisible } from '../store/profile/actions';
import { RootState } from '../store/profile/reducer';

export const Profile = () => {
  const visible = useSelector((state: RootState) => state.visible);
  const name = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <input type="checkbox" checked={visible} />
      <p>{name}</p>
      <button onClick={() => dispatch(toggleVisible)}>change profile</button>
    </>
  );
};
