import React, { useState } from "react";

import Modal from "../Modal";

export default function ProductListing({ item, trade }) {
    const [showModal, setShowModal] = useState(false);

    const name = item.productName;
    const qty = item.productQty;
    const date = item.updatedAt;
    const description = item.productDescription;
    const url = item.url;

    // console.log(name, qty, date, description, url);

    const tradeClick = (e) => {
        setShowModal(true);
    };

    return (
        <div className='product--listing'>
            <img src={url} style={{ width: "75px" }} />
            <div>
                <p>
                    <strong>Name: </strong> {name}
                </p>
                <p>
                    <strong>Quantity: </strong> {qty}
                </p>
                <p>
                    <strong>Description: </strong> {description}
                </p>
                <p>
                    <strong>Posted: </strong> {date}
                </p>
            </div>
            {trade && (
                <>
                    <button onClick={tradeClick}>Trade</button>
                    <button>Message</button>
                </>
            )}
            {showModal ? (
                <Modal
                    componentToRender={
                        <ModalContent
                            name={name}
                            qty={qty}
                            description={description}
                        />
                    }
                    closeModal={setShowModal}
                />
            ) : null}
        </div>
    );
}

function ModalContent({ name, qty, description }) {
    return (
        <div>
            <p>{name}</p>
            <p>{qty}</p>
            <p>{description}</p>
        </div>
    );
}
