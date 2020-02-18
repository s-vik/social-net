import { Redirect } from "react-router-dom";
import React from 'react';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const withAuthRedirect = (Component) => {
    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    const ConnectAuthRedirectContainer = connect(mapStateToPropsForRedirect)(RedirectContainer);

    return ConnectAuthRedirectContainer;
}



