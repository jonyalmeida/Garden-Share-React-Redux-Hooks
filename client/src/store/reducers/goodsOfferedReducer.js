import { SET_GOODS_OFFERED, ADD_GOODS } from "../actions/goodsOfferedActions";

export default function GoodsReducer(state = [], action) {
    const newState = state.slice();
    switch (action.type) {
        case SET_GOODS_OFFERED:
            return action.goods;
        case ADD_GOODS:
            newState.push(action.goods);
            return newState;
        default:
            return state;
    }
}
