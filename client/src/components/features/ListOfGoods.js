import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
import { fetchAllGoods } from '../../store/goodsOffered';

export default function ListOfGoods() {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.auth)

    const goods = useSelector(state => state.goods);

    useEffect(() => {
        dispatch(fetchAllGoods());
    }, [dispatch]);

    // const fName = () => good.User.firstName ? good.User.firstName : currentUser.firstName;
    // const lName = () => good.User.lastName ? good.User.lastName : currentUser.lastName;

    return (
        <>
            <h1>Products</h1>
            <ul>

                {goods.filter(good => good.User.id !== currentUser.id).map(good => <li key={good.id}>
                    <span><h3>Good from {good.User.firstName} {good.User.lastName}</h3>
                        {good.productName} <br />
                        {good.productQty} <br />
                        {good.productDescription}</span>
                    <span><button>TRADE</button></span>
                </li>)}
            </ul>
        </>
    );
}
