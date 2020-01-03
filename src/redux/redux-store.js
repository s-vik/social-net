import { createStore, combineReducers } from "redux";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarFriendsReducer from "./sidebar-friends-reducer";
import usersReducer from './users-reducer';

let reducersPack = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebarFriends: sidebarFriendsReducer,
    usersPage: usersReducer
});

const store = createStore(reducersPack);

export default store;

