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

//var initialStateStr = document.getElementById('container').getAttribute("state");

console.log(initialState);

if(initialState != null) {
  var store = createStore(rootReducer, initialState);
} else {
  var store = createStore(rootReducer);
}


function handleChange() {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
      var myRequest = new Request('/stateChange', {method: 'POST', body: "state="+JSON.stringify(store.getState()), headers:myHeaders});
        return fetch(myRequest,)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log("responseJson ",responseJson.value);
          })
          .catch((error) => {
            console.log("error ",error);
          });

}
store.subscribe(handleChange);


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