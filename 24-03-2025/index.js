
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import GG from './drilling/GG'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <GG property={10000000} />
  
);

// Optional: for measuring performance
reportWebVitals();

