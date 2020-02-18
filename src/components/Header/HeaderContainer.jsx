import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthData } from './../../redux/auth-reducer';
import { setAuthUserId } from '../../redux/post-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUserAuthData();
  }

  render() {
    return (
        <Header {...this.props}/>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authUserData: state.auth
  }
}

export default connect(mapStateToProps,{setUserAuthData,setAuthUserId})(HeaderContainer);