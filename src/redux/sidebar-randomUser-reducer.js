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
                randomUsers: Array.isArray(action.randomUser) ? [...action.randomUser].filter((thing, index, self) =>
                index === self.findIndex((t) => (
                  t.userId === thing.userId
                ))
              ) : [...state.randomUsers, action.randomUser].filter((thing, index, self) =>
                index === self.findIndex((t) => (
                  t.userId === thing.userId
                ))
              )
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
        }).catch(error => setRandomUser());
        
    }
}