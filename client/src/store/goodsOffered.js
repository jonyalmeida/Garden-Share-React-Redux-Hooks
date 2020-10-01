const SET_GOODS_OFFERED = 'messages/SET_GOODS_OFFERED';

export const setGoodsOffered = (goods) => {
    return {
        type: SET_GOODS_OFFERED,
        goods,
    };
};

export function fetchAllGoods() {
    return async dispatch => {
        const res = await fetch(`/api/goods/allgoods`)
        const { goods } = await res.json();
        if (res.ok) {
            dispatch(setGoodsOffered(goods));
        }
        return res;
    };
};

export default function GoodsReducer(state = [], action) {
    switch (action.type) {
        case SET_GOODS_OFFERED:
            return action.goods;
        default:
            return state;
    }
};
