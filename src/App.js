import React from 'react';
import Router from './routes';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router />
    <ToastContainer 
      position='bottom-right'
      newestOnTop
    />
    </>
    )
}

export default App