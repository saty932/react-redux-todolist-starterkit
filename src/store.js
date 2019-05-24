import { createStore} from 'redux';
import todos from './reducers/todos';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const middleWare=[thunk];


export const store=createStore(
 todos,applyMiddleware(...middleWare)
);

store.dispatch({
  type:"ADD_TODO",
  desc:"dfgdfgdfgdfg",
  completed:false
})
store.dispatch({
  type:"ADD_TODO",
  desc:"dfgdfgdfgdfg2",
  completed:true
})
store.dispatch({
  type:'SHOW_PENDING'
})