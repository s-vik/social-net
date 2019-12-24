import { createStore, combineReducers } from "redux";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';

let reducersPack = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

const store = createStore(reducersPack);

export default store;

