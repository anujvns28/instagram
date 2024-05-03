import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const store = configureStore({
   reducer: rootReducer,
})

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>

);



