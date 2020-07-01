import { connect } from 'react-redux';
import RandomUsers from './RandomUsers';
import React from 'react';
import { setRandomUser } from '../../../redux/sidebar-randomUser-reducer';
import { setUserProfile } from '../../../redux/post-reducer';
import { setStatus } from './../../../redux/post-reducer';

class RandomUserContainer extends React.Component {
  
  render() {
    if (this.props.randomUsers.length < 3)  this.props.setRandomUser();
    return (
      <RandomUsers {...this.props} setUserProfile={this.props.setUserProfile} setStatus={this.props.setStatus} />
    )
  }
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
    setStatus
  })(RandomUserContainer);


export default SidebarRandomUserContainer;