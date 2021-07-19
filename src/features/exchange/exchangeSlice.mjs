const initialState = {
    tokens: [
        {
            name: 'BTC',
            qty: 10_000,
        },
        {
            name: 'DOGE',
            qty: 10_000_000,
        },
    ],
};

const addToken = (name) => {
    return {
        type: 'exchange/new-token',
        payload: name,
    };
};

export default function exchangeReducer(state = initialState, action) {
    return {
        ...state,
    };
}
