import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";

import mainReducer from "./mainReducer";

/*
   * routeReducer
   *
   * The reducer merges route location changes into our immutable state.
   * The change is necessitated by moving to react-router-redux@4
   *
   */

const routeInitialState = fromJS({
  location: null
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: mainReducer,
    ...injectedReducers
  });
}
