import { connect } from 'react-redux';
import RandomUsers from './RandomUsers';
import React from 'react';
import { setRandomUser } from '../../../redux/sidebar-randomUser-reducer';
import { setUserProfile } from '../../../redux/profile-reducer';
import { setStatus } from './../../../redux/profile-reducer';
import { setRandomUserAccess } from './../../../redux/sidebar-randomUser-reducer';

const RandomUserContainer = (props) => {
  if(props.randomUsers.length < 3) props.setRandomUser();
  return (
    <RandomUsers {...props} setUserProfile={props.setUserProfile} setStatus={props.setStatus} />
  );
}

const mapStateToProps = (state) => {
  return {
    randomUsers: state.sidebarRandomUser.randomUsers
  }
}

const SidebarRandomUserContainer = connect(mapStateToProps,
  {
    setRandomUser,
    setUserProfile,
    setStatus,
    setRandomUserAccess
  })(RandomUserContainer);


export default SidebarRandomUserContainer;
