import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { createOffer } from "../../../store/thunks/userGoodsThunks";
import { uploadImage, returnFileSize } from "./utils";

export default function OfferForm({ user }) {
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    const [vegetables, setVegetables] = useState(true);
    const [animal, setAnimal] = useState(false);
    const [fruit, setFruit] = useState(false);
    const [file, setFile] = useState(null);
    const [photo, setPhoto] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(file);

        const fileTypes = ["image/jpeg", "image/png"];

        function validFileType(file) {
            return fileTypes.includes(file.type);
        }

        if (file) {
            if (validFileType(file)) {
                setPhoto(() => (
                    <p>
                        {returnFileSize(file.size)}
                        <img
                            alt='file'
                            style={{ width: "100px" }}
                            src={URL.createObjectURL(file)}
                        />
                    </p>
                ));
            } else {
                setPhoto(() => <p>Invalid file type.</p>);
            }
        }
    }, [file, setPhoto]);

    const onClickSelect = (e) => {
        if (e.target.id === "vegetables") {
            setVegetables(true);
        } else {
            setVegetables(false);
        }

        if (e.target.id === "animal") {
            setAnimal(true);
        } else {
            setAnimal(false);
        }

        if (e.target.id === "fruit") {
            setFruit(true);
        } else {
            setFruit(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "";
        if (file) {
            //upload file to aws s3 bucket using user's id as bucket folder
            uploadImage(file, user.id);

            //generate URL
            url = `https://garden-share.s3.us-east-2.amazonaws.com/${user.id}/${file.name}`;
        }

        const product = {
            productName: name,
            productQty: qty,
            productDescription: description,
            vegetables: vegetables,
            animal: animal,
            fruit: fruit,
            url: url,
        };

        dispatch(createOffer(user.id, product));
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <>
            <div className='offer'>
                <form noValidate className='offer--form'>
                    <div className='offer--form-item'>
                        <label name='product-name'>Product name: </label>
                        <input
                            required
                            placeholder='ie.: Fresh organic carrots'
                            name='product-name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='offer--form-item'>
                        <label name='product-qty'>Product quantity: </label>
                        <input
                            required
                            placeholder='ie.: 9 x 1lb bunches of lettuce'
                            name='product-qty'
                            onChange={(e) => setQty(e.target.value)}
                        />
                    </div>
                    <div className='offer--form-item'>
                        <label name='product-description'>
                            Product description:{" "}
                        </label>
                        <textarea
                            required
                            placeholder='ie.: The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.'
                            name='product-description'
                            rows='5'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='offer--form-item'>
                        <p>Select a product type:</p>
                        <div>
                            <input
                                type='radio'
                                id='vegetables'
                                name='vegetables'
                                value='vegetables'
                                className='offer--form--radio-input'
                                onChange={onClickSelect}
                                checked={vegetables}
                            />
                            <label htmlFor='vegetables'>Produce</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='animal'
                                name='animal'
                                value='animal'
                                className='offer--form--radio-input'
                                onChange={onClickSelect}
                                checked={animal}
                            />
                            <label htmlFor='animal'>Animal</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='fruit'
                                name='fruit'
                                value='fruit'
                                className='offer--form--radio-input'
                                onChange={onClickSelect}
                                checked={fruit}
                            />
                            <label htmlFor='fruit'>Fruits</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='image_uploads'>
                            Choose images to upload (PNG, JPG)
                        </label>
                        <input
                            type='file'
                            id='image_uploads'
                            name='image_uploads'
                            accept='.jpg, .jpeg, .png'
                            onChange={handleChange}
                        />
                    </div>
                    <div>{photo}</div>{" "}
                    <button onClick={handleSubmit}>Create offer</button>
                </form>
            </div>
        </>
    );
}
