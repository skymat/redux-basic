import React from 'react';
var connect   = require('react-redux').connect;

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>Compteur : {this.props.value}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </div>
    );
  }
}


export default Counter;
module.exports = Counter;