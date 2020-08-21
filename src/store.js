import { createStore} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
// Logger with default options
import logger from 'redux-logger'
const middleWare=[thunk];




export const store=createStore(
 rootReducer,applyMiddleware(...middleWare,logger)
);

  // store.dispatch({
  //   type:"ADD_TODO",
  //   desc:"dfgdfgdfgdfg",
  //   completed:false
  // })
  // store.dispatch({
  //   type:"ADD_TODO",
  //   desc:"dfgdfgdfgdfg2",
  //   completed:true
  // })
  // store.dispatch({
  //   type:'SHOW_PENDING'
  // })