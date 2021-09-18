import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "services/counterService";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
