import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import candidateReducer from "./candidateReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    data: candidateReducer,
  });
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  return store;
}
