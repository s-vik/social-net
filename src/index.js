import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

const renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App
            state={state}
            addMessage={store.addMessage.bind(store)}
            changeValueDialogsMessage={store.changeValueDialogsMessage.bind(store)}
            changeValuePost={store.changeValuePost.bind(store)}
            addPost={store.addPost.bind(store)}
        />
    </BrowserRouter>, document.getElementById('root'));

}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();