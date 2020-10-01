const SET_MESSAGES = 'messages/SET_GOODS_OFFERED';

export const setGoodsOffered = (goods) => {
    return {
        type: SET_GOODS_OFFERED,
        goods,
    };
};

export function fetchMessages() {
    return async dispatch => {
        const res = await fetch(`/api/goods/offered`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ vegetables: true }),
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setGoodsOffered(res.data));
        }
        return res;
    };
};

export default function messagesReducer(state = [], action) {
    switch (action.type) {
        case SET_MESSAGES:
            return action.messages;
        default:
            return state;
    }
};
