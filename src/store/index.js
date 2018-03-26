import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";
import { routerMiddleware } from "react-router-redux";
import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import { Iterable } from "immutable";
import Rx from 'rxjs/Rx';

import createReducer from "./reducers";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};
const logger = createLogger({
  stateTransformer
});

const createRxMiddleware = () => {
  let middleware;
   Rx.Observable.create(function (observer) {
      middleware = ({ dispatch, getState }) => next => action => 
        observer.next({ dispatch, getState, next, action});
   }).subscribe(e => console.log('this is inside my rxjs', e));
  return middleware;
};

const myMiddle = store => next => action => {

  console.log('here we are hehe');
  next(action);
};

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [routerMiddleware(history), logger, epicMiddleware, myMiddle, createRxMiddleware() ];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHA
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false
        })
      : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
