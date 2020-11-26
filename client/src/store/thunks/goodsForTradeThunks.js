import Cookies from "js-cookie";

import { setGoodsForTrade } from "../actions/goodsForTradeActions";

export function fetchGoodsForTrade(userId) {
    return async (dispatch) => {
        const response = await fetch(`/api/goods/all/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ userId: userId }),
        });

        const goods = await response.json();

        if (response.ok) {
            dispatch(setGoodsForTrade(goods));
        }
        return response;
    };
}
