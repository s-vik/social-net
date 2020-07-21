export const extractProfile = (state) => {
    return state.profilePage.profile;
}
export const extractAuthUserId = (state) => {
    return state.auth.id;
}
export const extractStatus = (state) => {
    return state.profilePage.status;
}
export const extractIsFetching = (state) => {
    return state.profilePage.isFetching;
}