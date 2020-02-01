import { createStore, combineReducers } from "redux";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarRandomUserReducer from "./sidebar-randomUser-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";

let reducersPack = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebarRandomUser: sidebarRandomUserReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducersPack);

window.store = store;
export default store;

