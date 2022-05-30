import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/Footer';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('main')
);

// aula parou em 2:08, dia 26/05
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)