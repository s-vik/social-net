import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/post-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setViewMyProfile } from './../../redux/post-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (userId) axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        if (response.status === 200) this.props.setUserProfile(response.data);
      })
  }
  render() {
    if(!this.props.profile) {
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



export default connect(mapStateToProps, { setUserProfile, setViewMyProfile })(withRouter(ProfileContainer));