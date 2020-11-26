export const SET_GOODS_FOR_TRADE = "SET_GOODS_FOR_TRADE";

export const setGoodsForTrade = (goods) => {
    return {
        type: SET_GOODS_FOR_TRADE,
        goods,
    };
};
