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
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Quantity:</strong> {qty}
            </p>
            <p>
                <strong>Description:</strong> {description}
            </p>
            <p>
                <strong>Posted:</strong> {date}
            </p>
            <button>Trade</button>
            <button>Message</button>
        </div>
    );
}
