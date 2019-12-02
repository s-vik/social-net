import { createStore, combineReducers } from "redux";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducersPack = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducersPack);

export default store;

