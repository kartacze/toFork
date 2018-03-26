import { combineReducers } from "redux";

function todoApp(state = 0, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case "LEFT_ACTION":
      {

        console.log('inside reducer');
      return Object.assign({}, state, {
        state:1 
      });
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  todoApp
});

export default reducer;
