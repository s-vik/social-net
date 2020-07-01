import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, logout } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentWillMount() {
    // this.props.setAuthUserData();
  }
  render() {
    return (
        <Header {...this.props} logout={this.props.logout}/>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authUserData: state.auth
  }
}

export default connect(mapStateToProps,{setAuthUserData, logout})(HeaderContainer);