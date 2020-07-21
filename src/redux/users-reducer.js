import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../helpers/object_helper/reducers_helper";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 8,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: true })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: false })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const followAccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowAccess = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id });


const toggleFollowUnFollow = async (dispatch, apiMethod, action, userId) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(action(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));

}

export const unFollow = (userId) => {
    return (dispatch) => {
        toggleFollowUnFollow(dispatch, usersAPI.unFollow, unFollowAccess, userId);
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        toggleFollowUnFollow(dispatch, usersAPI.follow, followAccess, userId);
    }
}
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        if (!response.error) {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setIsFetching(false));
        }
    }
}

export default usersReducer;