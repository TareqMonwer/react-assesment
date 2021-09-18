import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "services/counterService";
import randomUsersReducer from "services/userService";
import paginationReducer from "services/paginationService";

const rootReducer = combineReducers({
  counter: counterReducer,
  randomUsers: randomUsersReducer,
  pagination: paginationReducer,
});

export default function configureAppStore(preloadedState) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[]))
  );
  return store;
}