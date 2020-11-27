import React from "react";

export default function ProductListing({ item }) {
    console.log(item);

    const name = item.productName;
    const qty = item.productQty;
    const date = item.updatedAt;
    const description = item.productDescription;

    console.log(name, qty, date, description);

    return (
        <div className='product--listing'>
            <p>Name: {name}</p>
            <p>Quantity: {qty}</p>
            <p>Description: {description}</p>
            <p>Posted: {date}</p>
        </div>
    );
}
