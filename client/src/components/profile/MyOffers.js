import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserOffers } from "../../store/thunks/userGoodsThunks";

export default function MyOffers({ user }) {
    const dispatch = useDispatch();

    const myOffers = useSelector((state) => state.myGoods);
    console.log(myOffers);
    useEffect(() => {
        dispatch(fetchUserOffers(user.id));
    }, [dispatch, user.id]);
    return (
        <div>
            {myOffers.map((item, idx) => (
                <div key={idx}>{item.productName}</div>
            ))}
        </div>
    );
}
