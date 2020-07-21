import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setStatus, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { extractProfile, extractAuthUserId, extractStatus, extractIsFetching } from '../../redux/profileSelectors';


const ProfileContainer = (props) => {
  const userId = props.match.params.userId || props.authUserId;
  useEffect(() => {
    if (userId) {
      props.setUserProfile(userId);
      props.setStatus(userId);
    }
    else {
      props.history.push('/login');
    }
  }, [userId])

  if (props.isFetching) return <Preloader />
  else
    if (props.profile) {
      return <Profile {...props} />
    }
  return null
}


let mapStateToProps = (state) => {
  return {
    profile: extractProfile(state),
    authUserId: extractAuthUserId(state),
    status: extractStatus(state),
    isFetching: extractIsFetching(state)
  }
}
export default compose(
  connect(mapStateToProps, { setUserProfile, setStatus, updateStatus }),
  withRouter
)(ProfileContainer);
