import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Checkbox,
    FormGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';

import AuthSubmitButton from '../sessions/AuthSubmitButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function SearchGoodsForm() {
    const classes = useStyles();

    const currentUserId = useSelector(state => state.auth.id);

    const [productName, setProductName] = useState('');

    const [vegetables, setVegetables] = React.useState(false);

    const [animal, setAnimal] = React.useState(false);

    const [fruit, setFruit] = React.useState(false);

    const handleVeg = (e) => {
        if (e.target.name === 'vegetables') {
            setVegetables(!vegetables);
            console.log(vegetables, animal, fruit);
        }
    };

    const handleAnimal = (e) => {
        if (e.target.name === 'animal') {
            setAnimal(!animal);
            console.log(vegetables, animal, fruit);
        }
    };

    const handleFruit = (e) => {
        if (e.target.name === 'fruit') {
            setFruit(!fruit);
            console.log(vegetables, animal, fruit);
        }
    };

    const searchGoods = async (productName, vegetables, animal, fruit) => {
        const res = await fetch('/api/goods/offered', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ productName, vegetables, animal, fruit }),
        });
        const { goodsQuery } = await res.json();
        if (res.ok) {
            console.log(goodsQuery);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGoods(productName, vegetables, animal, fruit);
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
                <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Assign responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={vegetables} onChange={handleVeg} name="vegetables" />}
                                label="Vegetables"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={fruit} onChange={handleFruit} name="fruit" />}
                                label="Fruits"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={animal} onChange={handleAnimal} name="animal" />}
                                label="Animal"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                <AuthSubmitButton>Search Goods</AuthSubmitButton>
            </form>
        </div>
    );
}
