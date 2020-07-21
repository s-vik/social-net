import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/post-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { setStatus, updateStatus } from './../../redux/profile-reducer';
import { compose } from 'redux';
import { extractProfile, extractAuthUserId, extractStatus, extractIsFetching } from '../../redux/profileSelectors';


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
  redirectToLogin = () => (!this.getUserId() ? this.props.history.push('/login') : false);
  
  render() {
    // console.log('render profile')
    if (!this.props.isFetching) return <Preloader />
    return (<Profile {...this.props} />);
  }
}
let mapStateToProps = (state) => {
  // console.log('MSTP Profile')
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
