export const SET_GOODS_OFFERED = "SET_GOODS_OFFERED";
export const ADD_GOODS = "ADD_GOODS";

export const setGoodsOffered = (goods) => {
    return {
        type: SET_GOODS_OFFERED,
        goods,
    };
};

export const addGoods = (goods) => {
    return {
        type: ADD_GOODS,
        goods,
    };
};
