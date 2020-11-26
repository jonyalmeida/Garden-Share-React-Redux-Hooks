import Cookies from "js-cookie";

import { setGoodsOffered } from "../actions/userGoodsActions";

export function fetchUserOffers(userId) {
    return async (dispatch) => {
        const response = await fetch(`/api/goods/goods/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ userId: userId }),
        });

        const goods = await response.json();

        if (response.ok) {
            dispatch(setGoodsOffered(goods));
        }
        return response;
    };
}
