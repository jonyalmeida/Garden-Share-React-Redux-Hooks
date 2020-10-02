import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RadioGroup, Radio, FormLabel, FormControl, FormControlLabel, TextField } from '@material-ui/core';
import Cookies from 'js-cookie';

import { addGoods } from '../../store/goodsOffered';
import AuthSubmitButton from '../sessions/AuthSubmitButton';

export default function SignUpForm() {
    const dispatch = useDispatch();

    const currentUserId = useSelector(state => state.auth.id);

    const [productName, setProductName] = useState('');
    const [productQty, setProductQty] = useState('');
    const [productDescription, setProductDescription] = useState('');

    let vegetables;
    let animal;
    let fruit;

    const createOffer = async (productName, productQty, productDescription, sellerId, vegetables, animal, fruit) => {
        const res = await fetch('/api/goods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ productName, productQty, productDescription, sellerId, vegetables, animal, fruit }),
        });
        const { good } = await res.json();
        if (res.ok) {
            console.log(good)
            dispatch(addGoods(good));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createOffer(productName, productQty, productDescription, currentUserId, vegetables, animal, fruit);
    }

    const handleChange = (e) => {

        switch (e.target.value) {
            case 'vegetables':
                vegetables = true;
                fruit = false;
                animal = false;
                break;
            case 'animal':
                vegetables = false;
                fruit = false;
                animal = true;
                break;
            case 'fruit':
                vegetables = false;
                fruit = true;
                animal = false;
                break;
            default:
                return;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <TextField
                        style={{ display: 'flex', flexGrow: '2' }}
                        variant='filled'
                        label='Product Name'
                        type='text'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <TextField
                        style={{ display: 'flex', flexGrow: '2' }}
                        variant='filled'
                        label='Product Quantity'
                        type='text'
                        value={productQty}
                        onChange={(e) => setProductQty(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <TextField
                        style={{ display: 'flex', flexGrow: '2' }}
                        variant='filled'
                        label='Product Description'
                        type='text'
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type of Product</FormLabel>
                        <RadioGroup aria-label="typeOfProduct" name="typeOfProduct" onChange={handleChange}>
                            <FormControlLabel value="vegetables" control={<Radio />} label="Vegetables" />
                            <FormControlLabel value="animal" control={<Radio />} label="Animal" />
                            <FormControlLabel value="fruit" control={<Radio />} label="Fruit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <AuthSubmitButton>Create Offer</AuthSubmitButton>
            </form>
        </div>
    );
}
