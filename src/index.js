import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { addPost, changeValuePost, addMessage, changeValueDialogsMessage } from './redux/state';

export const renderEntireTree = (prop) => {
    ReactDOM.render(<BrowserRouter><App
        addMessage={addMessage}
        changeValuePost={changeValuePost}
        changeValueDialogsMessage={changeValueDialogsMessage}
        addPost={addPost}
        state={state || prop.state} />
    </BrowserRouter>, document.getElementById('root'));

}
renderEntireTree();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();