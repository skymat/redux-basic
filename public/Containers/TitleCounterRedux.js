import React from 'react';
var connect   = require('react-redux').connect
import TitleCounter from '../Components/TitleCounter'

function mapStateToProps(state) {
  return { value: state.counter,positionx : state.pixel.x , positiony:state.pixel.y}
}

var TitleCounterRedux = connect(
    mapStateToProps, 
    function(){}
)(TitleCounter);

export default TitleCounterRedux;
module.exports = TitleCounterRedux;