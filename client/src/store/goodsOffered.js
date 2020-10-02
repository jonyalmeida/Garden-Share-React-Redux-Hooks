const SET_GOODS_OFFERED = 'goodsOffered/SET_GOODS_OFFERED';
const ADD_GOODS = 'goodsOffered/ADD_GOODS'

export const setGoodsOffered = (goods) => {
    return {
        type: SET_GOODS_OFFERED,
        goods,
    };
};

export const addGoods = (goods) => {
    return {
        type: ADD_GOODS,
        goods
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
        case ADD_GOODS:
            let newState = state.slice();
            newState.push(action.goods);
            return newState;
        default:
            return state;
    }
};
