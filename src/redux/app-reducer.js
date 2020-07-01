import { setAuthUserData } from "./auth-reducer";

const APP_INITIALIZATION = 'APP_INITIALIZATION';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_INITIALIZATION:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const InitializationSuccess = () => ({ type: APP_INITIALIZATION })

export default appReducer;


export const appInitialization = () => {
    return (dispatch) => {
       let authDataReceived = dispatch(setAuthUserData());

       Promise.all([authDataReceived]).then(() => {
        dispatch(InitializationSuccess());
    })
    }
}