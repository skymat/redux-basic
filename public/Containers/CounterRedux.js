import React from 'react';
var connect   = require('react-redux').connect
import Counter from '../Components/Counter'

function mapStateToProps(state) {
  return { value: state.counter }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
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