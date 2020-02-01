
const SET_RANDOM_USER = 'SET_RANDOM_USER';

let initialState = {
    randomUsers: [],
}

const sidebarRandomUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RANDOM_USER:
            return {
                ...state,
                randomUsers: [...state.randomUsers, action.randomUser,]
            }
        default:
            return state;

    }
}
export const setRandomUser = (randomUser) => ({type: SET_RANDOM_USER, randomUser});
export default sidebarRandomUserReducer;

