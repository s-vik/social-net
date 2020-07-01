import { randomUserAPI } from "../api/api";

const SET_RANDOM_USER = 'SET_RANDOM_USER';

let initialState = {
    randomUsers: [ ]
}

const sidebarRandomUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RANDOM_USER:
            return {
                ...state,
                randomUsers: [...state.randomUsers, action.randomUser]
            }
        default:
            return state;

    }
}
export const setRandomUserAccess = (randomUser) => ({type: SET_RANDOM_USER, randomUser});
export default sidebarRandomUserReducer;

export const setRandomUser = () => {
    return (dispatch) => {
        randomUserAPI.getRandomUser()
        .then((response) => {
          dispatch(setRandomUserAccess(response.data));
        }).catch(error => console.log(error.message));
    }
}