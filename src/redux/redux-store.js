import { createStore, combineReducers, applyMiddleware } from "redux";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarRandomUserReducer from "./sidebar-randomUser-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


let reducersPack = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebarRandomUser: sidebarRandomUserReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(reducersPack,applyMiddleware(ReduxThunk));

window.store = store;
export default store;

