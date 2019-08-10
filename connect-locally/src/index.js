import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const { document } = global.window;
ReactDOM.render(<App />, document.getElementById('root'));
