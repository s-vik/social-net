import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setAuthUserId } from '../../redux/post-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setViewMyProfile } from './../../redux/post-reducer';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authUserId;
    if (userId) {
      profileAPI.getUserProfile(userId).then((response) => {
        this.props.setUserProfile(response.data);
      })
    } 
  }
  render() {
    if (!this.props.profile) {
      this.props.setViewMyProfile(true);
      return <Preloader />
    }
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



export default connect(mapStateToProps,
  { setAuthUserId, setUserProfile, setViewMyProfile }
)(withRouter(ProfileContainer));