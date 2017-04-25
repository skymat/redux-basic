import React from 'react';
var connect   = require('react-redux').connect;

class TitleCounter extends React.Component {
  render() {
    return (
      <div>
        <h1>Compteur : {this.props.value}</h1>
      </div>
    );
  }
}


export default TitleCounter;
module.exports = TitleCounter;