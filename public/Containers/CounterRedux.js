import React from 'react';
var connect   = require('react-redux').connect
import Counter from '../Components/Counter'

function mapStateToProps(state) {
  console.log("mapstatetoprops",state.counter);
  return { value: state.counter }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
      console.log("click");
        dispatch( {type: 'increase'} ) 
    },
    onDecreaseClick: function() { 
        dispatch( {type: 'decrease'} ) 
    }
  }
}

var CounterRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);

export default CounterRedux;
module.exports = CounterRedux;