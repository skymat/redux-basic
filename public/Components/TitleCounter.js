import React from 'react';
var connect   = require('react-redux').connect;

class TitleCounter extends React.Component {

  render() {
    var divStyle = {
      color: "#"+(+this.props.positionx).toString(16).toUpperCase()+(+this.props.positiony).toString(16).toUpperCase()
    };
    return (
      <div className="divtitle" style={divStyle}>
        <h1>Compteur : {this.props.value}</h1>
      </div>
    );
  }
}


export default TitleCounter;
module.exports = TitleCounter;