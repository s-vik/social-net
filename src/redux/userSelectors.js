import { createSelector } from "reselect";

export const extractUsers = (state) => {
    return state.usersPage.users;
}
export const extractIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const extractFilterUsers = createSelector(extractUsers, extractIsFetching, (users)=>(users.filter(u => true)));