import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import App from './App';
import { rootReducer } from './redux/reducer';
import logger from "redux-logger"

const store = createStore(rootReducer, applyMiddleware(logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

