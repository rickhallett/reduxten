import { ADD_USER } from '../../constants.mjs';

const initialState = {
    users: [
        {
            name: 'Lockie',
            wallet: {
                GBP: 2_000,
                BTC: 2.1,
                DOGE: 34_244,
            },
        },
        {
            name: 'Ed',
            wallet: {
                GBP: 2_000,
                BTC: 2.1,
                DOGE: 34_244,
            },
        },
        {
            name: 'Cezary',
            wallet: {
                GBP: 2_000,
                BTC: 2.1,
                DOGE: 34_244,
            },
        },
        {
            name: 'Rick',
            wallet: {
                GBP: 2_000,
                BTC: 2.1,
                DOGE: 34_244,
            },
        },
    ],
};

const addUser = (name, wallet) => {
    return {
        type: ADD_USER,
        payload: { name, wallet },
    };
};

export default function userReducer(state = initialState, action) {
    return {
        ...state,
    };
}
