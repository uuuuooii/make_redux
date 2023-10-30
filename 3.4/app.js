import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import { INCREASE } from './action-type.js';

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispath(actionCreator(INCREASE, 1));
store.dispath(actionCreator(INCREASE));
