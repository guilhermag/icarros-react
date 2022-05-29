import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/Footer';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('main')
);

root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
)