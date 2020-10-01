import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
import { fetchAllGoods } from '../../store/goodsOffered';

export default function ListOfGoods() {
    // const [goods, setGoods] = useState([]);
    const goods = useSelector(state => state.goods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllGoods());
        console.log('1')
    }, [dispatch]);

    console.log(goods);

    return (
        <>
            <h1>Products</h1>
            <ul>
                {goods.map(good => <li key={good.id}>
                    <h3>Good from {good.User.firstName} {good.User.lastName}</h3>
                    {good.productName} <br />
                    {good.productQty} <br />
                    {good.productDescription}
                </li>)}
            </ul>
        </>
    );
}

// async function fetchGoodsByQuery() {

//     const response = await fetch(`/api/goods/offered`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
//         },
//         body: JSON.stringify({ vegetables: true }),
//     });
//     const responseData = await response.json();
//     console.log(responseData);
// }
// fetchGoodsByQuery();

// const userComponents = .map((user) => <User key={user.id} user={user} />)