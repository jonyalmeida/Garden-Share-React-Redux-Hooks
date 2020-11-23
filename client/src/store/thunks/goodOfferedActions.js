import { setGoodsOffered } from "../actions/goodsOfferedActions";

export function fetchAllGoods() {
    return async (dispatch) => {
        const res = await fetch(`/api/goods/allgoods`);
        const { goods } = await res.json();
        if (res.ok) {
            dispatch(setGoodsOffered(goods));
        }
        return res;
    };
}
