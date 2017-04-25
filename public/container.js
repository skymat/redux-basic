import React from 'react'
import { render } from 'react-dom'

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;
//import counterReducer from './Reducer'
//import Counter from './Counter';

const INITIAL_STATE = {
  count:0
}

function counterReducer(state = INITIAL_STATE, action) {
  if(action.type == 'increase') {
      return { count: state.count + 1 }
  } else {
      return { count: state.count }
  }
}
//export default counterReducer;

const store = createStore(counterReducer);


class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>Compteur : {this.props.value}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

class TitleCounter extends React.Component {
  render() {
    return (
      <div>
        <h1>Compteur : {this.props.value}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.count }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
        dispatch( {type: 'increase'} ) 
    }
  }
}
var connect   = require('react-redux').connect
var CounterRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);


var TitleCounterRedux = connect(
    mapStateToProps, 
    function(){}
)(TitleCounter);


render(
  <Provider store={store}>
      <div>
        <TitleCounterRedux />
        <CounterRedux/>
    </div>
  </Provider>,
  document.getElementById('container')
);