import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthData } from './../../redux/auth-reducer';
import { setAuthUserId } from '../../redux/post-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {
        withCredentials: true
      })
      .then((response) => {
        if(response.data.resultCode === 0) {
          const {id,email,login} = response.data.data;
          this.props.setAuthUserId(id);
          this.props.setUserAuthData(id,email,login);
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