import React from 'react';
import Router from './routes';
import { Provider } from 'react-redux';

import store from '@/store';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
        <ToastContainer
          position='bottom-right'
          newestOnTop
        />
      </Provider>
    </>
  )
}

export default App