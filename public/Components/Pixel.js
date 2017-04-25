import React from 'react';
var connect   = require('react-redux').connect;

class Pixel extends React.Component {
  render() {
    return (
      <div className="divall" onMouseMove={(e) => this.props.coordonate(e)} >
        <span>Pixels : {this.props.x} / {this.props.y}</span>
      </div>
    );
  }
}


export default Pixel;
module.exports = Pixel;