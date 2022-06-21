import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'dotenv';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('main')
);

// aula parou em 2:08, dia 26/05
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)