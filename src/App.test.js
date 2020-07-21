import React from 'react';
import ReactDOM from 'react-dom';
import MainAppComponent from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainAppComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
