import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserOffers } from "../../store/thunks/userGoodsThunks";

export default function MyOffers({ user }) {
    const dispatch = useDispatch();

    const myOffers = useSelector((state) => state.goods);

    useEffect(() => {
        dispatch(fetchUserOffers(user.id));
    }, [dispatch, user.id, fetchUserOffers]);

    return <h1>My Offers</h1>;
}
