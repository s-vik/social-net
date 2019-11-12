import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';

export const renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App   /></BrowserRouter>, document.getElementById('root'));
}

