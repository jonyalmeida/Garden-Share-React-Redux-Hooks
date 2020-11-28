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

        if (response.ok) {
            const goods = await response.json();
            dispatch(setGoodsOffered(goods));
        }
        return response;
    };
}

export function createOffer(userId, product) {
    return async (dispatch) => {
        const response = await fetch(`/api/goods/create-offer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ userId: userId, product }),
        });

        if (response.ok) {
            // const goods = await response.json();
            // dispatch(setGoodsOffered(goods));
        }

        return response;
    };
}
