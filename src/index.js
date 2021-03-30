import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {countReducer} from './countReducer'
import{applyMiddleware, createStore} from 'redux';
import{Provider} from 'react-redux';
import logger from 'redux-logger';
//MIDDLEWARE
// const myLogger=(store)=>{
//   return (next)=>{
//     return (action)=>{
//       console.log('Middleware ran');
//       return next(action)
//     }
//   }
// }

const myLogger=(store)=>(next)=>(action)=>{
  //console.log('Middleware ran');
  return next(action)
}
const secondMiddlweware=(store)=>(next)=>(action)=>{
  //console.log('2nd Middleware ran');
  return next(action)
}
const capAtTem=(store)=>(next)=>(action)=>{
  if(store.getState()>=10){
    return next({type:'DECREMENT'})
   
  }
  next(action)
}
const store=createStore(countReducer,applyMiddleware(myLogger, secondMiddlweware, capAtTem, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

