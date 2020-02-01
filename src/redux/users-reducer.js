const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let oldStateUsers = [{
    id: 1, fullName: 'Sergey K.', photoURL: 'https://storge.pic2.me/c/1360x800/473/5748e26f38963.jpg',
    followed: false, status: 'i\'m the best', from: { country: 'Ukraine', city: 'Kiev' }
},
{
    id: 2, fullName: 'Dmitry B.', photoURL: 'https://storge.pic2.me/c/1360x800/473/5748e26f38963.jpg',
    followed: true, status: 'i\'m the best too', from: { country: 'Russia', city: 'Moscow' }
},
{
    id: 3, fullName: 'Kiril H.', photoURL: 'https://storge.pic2.me/c/1360x800/473/5748e26f38963.jpg',
    followed: false, status: 'i\'m the best too', from: { country: 'Belarus', city: 'Minsk' }
},
{
    id: 4, fullName: 'Inna V.', photoURL: 'https://storge.pic2.me/c/1360x800/473/5748e26f38963.jpg',
    followed: true, status: 'i\'m the best too', from: { country: 'Ukraine', city: 'Kharkiv' }
}]
let initialState = {
    users: [ ],
    totalCount: 0,
    currentPage: 1,
    count: 8,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SETUSERS:
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
                isFetching: action.fetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SETUSERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setIsFetching = (fetching) => ({ type: SET_IS_FETCHING, fetching });
export default usersReducer;