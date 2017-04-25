const INITIAL_STATE = 0;

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type){
  case 'increase' :
    return state + 1 ;
  case 'decrease' :
    return state - 1 ;
  default:
    return state;
  }
}