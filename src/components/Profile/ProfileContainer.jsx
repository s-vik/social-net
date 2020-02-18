import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setAuthUserId } from '../../redux/post-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setViewMyProfile } from './../../redux/post-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authUserId;
    this.props.setUserProfile(userId);
  }
  render() {
    if (!this.props.profile) return <Preloader />
    return (
      <Profile {...this.props} />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authUserId: state.profilePage.authUserId,
    viewMe: state.profilePage.viewMe
  }
}

export default compose (
  connect(mapStateToProps,{ setAuthUserId, setUserProfile, setViewMyProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
