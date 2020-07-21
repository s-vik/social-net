import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { renderField } from './../../hoc/formControls/FormControls';
import { required } from '../../helpers/validators/validators';
import style from '../../hoc/formControls/formControls.module.css'

const renderInput = renderField('input');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={renderInput} placeholder="Login" name="login" />
            </div>
            <div>
                <Field validate={[required]} component={renderInput} placeholder="Password" name="password" type='password'/>
            </div>
            <div>
                <Field component={renderInput} type="checkbox" name="rememberMe" /> remember me
            </div>
            <div className={props.error && style.loginError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props)=> {
   const onSubmit = ({ login, password, rememberMe }) => {
        props.login(login, password, rememberMe);
    }
        if (props.isAuth) {
            return <Redirect to={`/profile`} />
        }
        return (
            <div className={style.loginForm}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        )

    }

const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth
});


export default connect(mapStateToProps, { login })(Login);