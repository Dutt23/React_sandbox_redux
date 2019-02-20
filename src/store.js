// Thunk is used for disptaching. Compose lets use do more than one thing
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// File will be index.js , hence we don't need to add .js after it
import rootReducer from "./reducers";

// When create store runs , it takes in intial state as a parameter
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
