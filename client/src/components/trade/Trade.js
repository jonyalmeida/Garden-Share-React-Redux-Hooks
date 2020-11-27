import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductListing from "./ProductListing";
import Map from "./googleMaps/Map";

import { fetchGoodsForTrade } from "../../store/thunks/goodsForTradeThunks";

export default function Trade({ user }) {
    const dispatch = useDispatch();

    const allGoods = useSelector((state) => state.allGoods);

    useEffect(() => {
        console.log("USERID", user.id);
        dispatch(fetchGoodsForTrade(user.id));
    }, [dispatch, user.id]);
    console.log(allGoods);

    //build list with each product's geolocation
    const productsLocationList = allGoods.map((item) => {
        return {
            itemLat: Number(item.User.userGeocode[0]),
            itemLng: Number(item.User.userGeocode[1]),
            itemDescription: item.productDescription,
            itemName: item.productName,
            itemQty: item.productQty,
            itemType: (() =>
                item.vegetables ? "veg" : item.animal ? "animal" : "fruit")(),
        };
    });

    console.log(productsLocationList);

    return (
        <>
            {productsLocationList.length > 0 ? (
                <Map
                    productsLocationList={productsLocationList}
                    zoomLevel={12}
                />
            ) : null}
        </>
    );

    // return (
    //     <div className='trading'>
    //         <div className='trading--group vegetables'>
    //             <h3>Vegetables</h3>
    //             {allGoods
    //                 .filter((item) => item.vegetables)
    //                 .map((item, idx) => (
    //                     <ProductListing key={idx} item={item} />
    //                 ))}
    //         </div>
    //         <div className='trading--group animal'>
    //             <h3>Animal</h3>
    //             {allGoods
    //                 .filter((item) => item.animal)
    //                 .map((item, idx) => (
    //                     <ProductListing key={idx} item={item} />
    //                 ))}
    //         </div>
    //         <div className='trading--group fruits'>
    //             <h3>Fruits</h3>
    //             {allGoods
    //                 .filter((item) => item.fruit)
    //                 .map((item, idx) => (
    //                     <ProductListing key={idx} item={item} />
    //                 ))}
    //         </div>
    //     </div>
    // );
}
