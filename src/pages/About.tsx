import React, { FC } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store';
import { toggleVisible } from '../store/profile/actions';

interface AboutProps {
  name: string;
  visible: boolean;
  toggle: () => void;
}

export const About: FC<AboutProps> = (props) => {
  return (
    <>
      <h2>About page</h2>
      <input type="checkbox" checked={props.visible} onChange={props.toggle} />
      <p>{props.name}</p>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  name: state.profile.name,
  visible: state.profile.visible,
  chatlist: state.chatlist,
});

const mapDispatchToProps = {
  toggle: () => toggleVisible,
};

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
