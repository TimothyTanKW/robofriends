import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const container = document.getElementById('root');

// create the root first
const root = ReactDOMClient.createRoot (container);

// initialize the root
root.render (<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
