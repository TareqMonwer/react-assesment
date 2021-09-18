import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "services/counterService";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default function configureAppStore(preloadedState) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[]))
  );
  return store;
}