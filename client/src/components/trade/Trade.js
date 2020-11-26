import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGoodsForTrade } from "../../store/thunks/goodsForTradeThunks";

export default function Trade({ user }) {
    const dispatch = useDispatch();

    const allGoods = useSelector((state) => state.allGoods);

    useEffect(() => {
        console.log("USERID", user.id);
        dispatch(fetchGoodsForTrade(user.id));
    }, [dispatch, user.id]);
    return (
        <div>
            <ul>
                {allGoods.map((item, idx) => (
                    <li key={idx}>{item.productName}</li>
                ))}
            </ul>
        </div>
    );
}
