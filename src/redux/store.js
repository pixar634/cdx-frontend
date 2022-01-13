import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import projectReducer from "./projectSlice";
import userReducer from "./userSlice";

const combinedReducer = combineReducers({
  project: projectReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
