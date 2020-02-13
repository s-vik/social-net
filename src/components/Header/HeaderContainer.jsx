import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthData } from './../../redux/auth-reducer';
import { setAuthUserId } from '../../redux/post-reducer';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
      authAPI.getAuthUser().then((response) => {
        if(response.data.resultCode === 0) {
          const {id,email,login} = response.data.data;
          this.props.setUserAuthData(id,email,login);
          this.props.setAuthUserId(id);
        }
      })
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