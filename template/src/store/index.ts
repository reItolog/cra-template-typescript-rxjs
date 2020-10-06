import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { StateType } from 'typesafe-actions';

const rootEpic = combineEpics();

// Epics
const epicMiddleware = createEpicMiddleware();

// Reducers
const reducer = combineReducers({});

// export type RootActions = ActionType< >;

export type AppState = StateType<typeof reducer>;

export default (preloadedState = {}) => {
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return { store };
};
