import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import {Provider} from 'react-redux'
import App from './App';
import { postReducer } from './reducer';
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
const store=createStore(postReducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


