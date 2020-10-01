import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

export default function ListOfGoods() {
    const currentUserId = useSelector(state => state.auth.id);

    // const [goods, setGoods] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`/api/goods/${currentUserId}`);
            const responseData = await response.json();
            console.log(responseData);
        }
        fetchData();
    }, [currentUserId]);

    async function fetchGoodsByQuery() {

        const response = await fetch(`/api/goods/offered`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ vegetables: true }),
        });
        const responseData = await response.json();
        console.log(responseData);
    }
    fetchGoodsByQuery();

    // const userComponents = .map((user) => <User key={user.id} user={user} />)
    return (
        <>
            <h1>Products</h1>
        </>
    );
}
