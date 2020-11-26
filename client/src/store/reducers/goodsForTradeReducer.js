import { SET_GOODS_FOR_TRADE } from "../actions/goodsForTradeActions";

export default function goodsForTradeReducer(state = [], action) {
    switch (action.type) {
        case SET_GOODS_FOR_TRADE:
            return [...action.goods.myGoods];
        default:
            return state;
    }
}
