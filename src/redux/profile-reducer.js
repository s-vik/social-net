import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

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
                profile: action.profile
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
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
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });


export default postReducer;

export const setUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(setUserProfileAccess(null));
        dispatch(setIsFetching(true));
        profileAPI.getUserProfile(userId).then((response) => {
            if (response.statusText === 'OK') {
                dispatch(setUserProfileAccess(response.data));
                dispatch(setIsFetching(false))
            }
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