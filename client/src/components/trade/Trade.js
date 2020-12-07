import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductListing from "./ProductListing";
import Map from "./googleMaps/Map";

import { fetchGoodsForTrade } from "../../store/thunks/goodsForTradeThunks";

export default function Trade({ user }) {
    const [view, setView] = useState("trade");

    const dispatch = useDispatch();

    const allGoods = useSelector((state) => state.allGoods);

    useEffect(() => {
        dispatch(fetchGoodsForTrade(user.id));
    }, [dispatch, user.id]);

    //build list with each product's geolocation
    const productsLocationList = allGoods.map((item) => {
        return {
            itemLat: Number(item.User.userGeocode[0]),
            itemLng: Number(item.User.userGeocode[1]),
            itemDescription: item.productDescription,
            itemName: item.productName,
            itemQty: item.productQty,
            itemUrl: item.url,
            itemType: (() =>
                item.vegetables ? "veg" : item.animal ? "animal" : "fruit")(),
        };
    });

    //displays offer listings on map
    const mapper = (
        <>
            <font id='listing' onClick={(e) => setView(e.target.id)}>
                View listing
            </font>
            {productsLocationList.length > 0 ? (
                <Map
                    productsLocationList={productsLocationList}
                    zoomLevel={12}
                />
            ) : null}
        </>
    );

    const trade = true;

    //displays offer listings as list
    const lister = (
        <div className='trading'>
            <font id='map' onClick={(e) => setView(e.target.id)}>
                View map
            </font>
            <h3>Vegetables</h3>
            <div className='trading--group vegetables'>
                {allGoods
                    .filter((item) => item.vegetables)
                    .map((item, idx) => (
                        <ProductListing trade={trade} key={idx} item={item} />
                    ))}
            </div>
            <h3>Animal</h3>
            <div className='trading--group animal'>
                {allGoods
                    .filter((item) => item.animal)
                    .map((item, idx) => (
                        <ProductListing trade={trade} key={idx} item={item} />
                    ))}
            </div>
            <h3>Fruits</h3>
            <div className='trading--group fruits'>
                {allGoods
                    .filter((item) => item.fruit)
                    .map((item, idx) => (
                        <ProductListing trade={trade} key={idx} item={item} />
                    ))}
            </div>
        </div>
    );

    return view === "map" ? mapper : lister;
}
