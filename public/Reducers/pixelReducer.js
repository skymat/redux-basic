const INITIAL_STATE = {
  x:0,
  y:0
}
export default function pixel(state = INITIAL_STATE, action) {
  switch (action.type){
  case 'mousemoove' :
    return { x: action.value.x, y:action.value.y };
  default:
    return state;
  }
}