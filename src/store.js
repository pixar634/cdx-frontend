import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { projectReducer } from "./reducers/ProjectReducer";
import { usersReducer } from "./reducers/UserReducers";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        projects: projectReducer,
        users: usersReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;