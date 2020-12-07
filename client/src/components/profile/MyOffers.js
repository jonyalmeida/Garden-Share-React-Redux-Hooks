import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserOffers } from "../../store/thunks/userGoodsThunks";
import ProductListing from "../trade/ProductListing";

export default function MyOffers({ user }) {
    const dispatch = useDispatch();

    const myOffers = useSelector((state) => state.myGoods);
    useEffect(() => {
        dispatch(fetchUserOffers(user.id));
    }, [dispatch, user.id]);

    const trade = false;

    return (
        <div className='my-offers'>
            {myOffers.map((item, idx) => (
                <ProductListing trade={trade} key={idx} item={item} />
            ))}
        </div>
    );
}
