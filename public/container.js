import React from 'react'
import { render } from 'react-dom'
import {combineReducers, createStore} from "redux";

var Provider    =  require('react-redux').Provider;


import counter from './Reducers/counterReducer'
import CounterRedux from './Containers/CounterRedux';
import TitleCounterRedux from './Containers/TitleCounterRedux';


import PixelRedux from './Containers/PixelRedux';
import pixel from './Reducers/pixelReducer'

const rootReducer = combineReducers({
    counter,
    pixel
});

const store = createStore(rootReducer);


render(
  <Provider store={store}>
      <div>
        <PixelRedux />
        <TitleCounterRedux />
       <CounterRedux/>
       <PixelRedux />
    </div>
  </Provider>,
  document.getElementById('container')
);