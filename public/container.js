import React from 'react'
import { render } from 'react-dom'

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;
import counterReducer from './Reducers/counterReducer'
const store = createStore(counterReducer);
import CounterRedux from './Containers/CounterRedux';
import TitleCounterRedux from './Containers/TitleCounterRedux';

render(
  <Provider store={store}>
      <div>
        <TitleCounterRedux />
        <CounterRedux/>
    </div>
  </Provider>,
  document.getElementById('container')
);