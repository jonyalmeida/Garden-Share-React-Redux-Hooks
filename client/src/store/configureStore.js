import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import auth from "./reducers/authReducer";
import nav from "./reducers/navReducer";
import msgs from "./reducers/messagesReducer";
import myGoods from "./reducers/userGoodsReducer";
import allGoods from "./reducers/goodsForTradeReducer";

const rootReducer = combineReducers({
    auth,
    nav,
    msgs,
    myGoods,
    allGoods,
});

let storeEnhancer;

if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
}

export default function configureStore(inititalState) {
    return createStore(rootReducer, inititalState, storeEnhancer);
}
