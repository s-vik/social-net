import { authAPI } from "../api/api";
import { setAuthUserId } from "./post-reducer";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setUserAuthDataAccess = (id, email, login) => ({ type: SET_USER_AUTH_DATA, data: { id, email, login } });
export default authReducer;


export const setUserAuthData = () => {
    return (dispatch) => {
        authAPI.getAuthUser().then((response) => {
            if(response.data.resultCode === 0) {
              const {id,email,login} = response.data.data;
              dispatch(setUserAuthDataAccess(id,email,login));
              dispatch(setAuthUserId(id));
            }
          })
    }
}