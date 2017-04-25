const INITIAL_STATE = {
  count:0
}
export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type){
  case 'increase' :
    return { count: state.count + 1 };
  case 'decrease' :
    return { count: state.count - 1 };
  default:
    return { count: state.count };
  }
}