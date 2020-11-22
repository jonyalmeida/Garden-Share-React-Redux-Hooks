import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import msgs from "./messages";
import goods from "./goodsOffered";

const rootReducer = combineReducers({
    authReducer,
    msgs,
    goods,
});

let storeEnhancer;

if (process.env.NODE_ENV !== "production") {
    console.log("redux");
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
}

export default function configureStore(inititalState) {
    return createStore(rootReducer, inititalState, storeEnhancer);
}
