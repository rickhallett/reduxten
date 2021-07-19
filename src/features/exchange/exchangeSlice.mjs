const initialState = {
    tokens: [
        {
            name: 'BTC',
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
