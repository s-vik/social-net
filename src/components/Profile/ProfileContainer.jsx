import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/post-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setStatus, updateStatus } from './../../redux/post-reducer';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
  componentDidMount() {
    if (!this.redirectToLogin()) {
      this.props.setUserProfile(this.getUserId());
      this.props.setStatus(this.getUserId());
    }
  }
  componentDidUpdate() {
    this.redirectToLogin();
  }
  getUserId = () => (this.props.match.params.userId || this.props.authUserId);
  redirectToLogin = () => {
    if (!this.getUserId()) {
      this.props.history.push('/login');
    } else {
      return false;
    }
  }
  render() {

    if (!this.props.isFetching) return <Preloader />
    return (<Profile {...this.props} />);
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authUserId: state.auth.id,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching
  }
}
export default compose(
  connect(mapStateToProps, { setUserProfile, setStatus, updateStatus }),
  withRouter
)(ProfileContainer);
