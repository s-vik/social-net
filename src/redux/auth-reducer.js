import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_ERROR = 'SET_AUTH_USER_ERROR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_AUTH_USER_ERROR:
            return {
                ...state,
                error: action.error
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export const setAuthUserDataAccess = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login, isAuth } });
export const setAuthUserError = (error) => ({ type: SET_AUTH_USER_ERROR, error });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export default authReducer;
 

export const setAuthUserData = () => {
    return (dispatch) => {
      return authAPI.getAuthUser().then((response) => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                dispatch(setAuthUserDataAccess(id, email, login, true));
            }
        }).catch(error => {
            dispatch(setAuthUserError(error.message));
            console.log(error.message);
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData());
            } else {
                dispatch(stopSubmit('login', {_error: response.data.messages[0] || 'Some error'}));
            }
        }).catch(error => console.log(error.message));
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAccess(null, null, null, false));
            }
        }).catch(error => console.log(error.message));
    }
}