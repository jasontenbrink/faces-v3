import { applyMiddleware, createStore, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./reducers"

const middleware = applyMiddleware(thunk, logger());

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(reducer, enhancers);

// export default createStore(reducer, window.devToolsExtension && window.devToolsExtension(), middleware);
