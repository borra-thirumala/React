import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../18-03-2025/App.js';  

import Lifecycle from '../18-03-2025/Lifecycle.jsx';
import ComponentDidMount from '../18-03-2025/ComponentDidMount.jsx';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <App/>
    <Lifecycle/>
    <ComponentDidMount/>
    </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();