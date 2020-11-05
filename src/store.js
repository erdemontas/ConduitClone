import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers";

import rootSaga from "./sagas";

//Router
export const history = createHistory();

//Saga
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
  logger
);

export const store = createStore(
  rootReducer,
  compose(middleware, composeWithDevTools())
);

sagaMiddleware.run(rootSaga);
