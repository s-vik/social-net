const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_POST = 'CHANGE-VALUE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_AUTH_USER_ID = 'SET_AUTH_USER_ID';
const SET_VIEW_MY_PROFILE = 'SET_VIEW_MY_PROFILE';

let initialState = {
    posts: [
        { id: 1, likeCount: 25, message: 'Hi, how are you?' },
        { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
    ],
    inputValue: '',
    profile: null,
    authUserId: '',
    viewMe: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: 5,
                    likeCount: 0,
                    message: state.inputValue
                }],
                inputValue: ''
            };
        case CHANGE_VALUE_POST:
            return {
                ...state,
                inputValue: action.currentText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_AUTH_USER_ID:
            return {
                ...state,
                authUserId: action.authUserId
            };
        case SET_VIEW_MY_PROFILE:
            return {
                ...state,
                viewMe: action.viewMe
            }
        default:
            return state;
    }
}
export const actionCreateAddPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const actionCreateChangeValuePost = (currentText) => ({ type: CHANGE_VALUE_POST, currentText });
export const setAuthUserId = (authUserId) => ({ type: SET_AUTH_USER_ID, authUserId });
export const setViewMyProfile = (viewMe) => ({ type: SET_VIEW_MY_PROFILE, viewMe });
export default postReducer;