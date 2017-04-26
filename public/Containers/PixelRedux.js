import React from 'react';
var connect   = require('react-redux').connect
import Pixel from '../Components/Pixel'

function mapStateToProps(state) {
  return { x: state.pixel.x,y:state.pixel.y }
}
function mapDispatchToProps(dispatch) {
  
  return {
    coordonate: function(e) { 
        dispatch( {type: 'mousemoove', value: {x:e.screenX,y:e.screenY}} ) 
    }
  }
}

var PixelRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Pixel);

export default PixelRedux;
module.exports = PixelRedux;