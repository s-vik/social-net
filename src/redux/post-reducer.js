import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_STATUS = 'CHANGE_VALUE_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, likeCount: 25, message: 'Hi, how are you?' },
        { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
    ],
    profile: null,
    status: '',
    isFetching: false
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
                    message: action.inputValue
                }],
                
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
                isFetching: true
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPost = (inputValue) => ({ type: ADD_POST, inputValue });
export const setUserProfileAccess = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusAccess = (status) => ({ type: SET_STATUS, status });


export default postReducer;

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then((response) => {
            dispatch(setUserProfileAccess(response.data));
        })
    }
}

export const setStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatusAccess(response.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAccess(status));
            }
        })
    }
}