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

export const addUser = ({ name, wallet }) => {
    return {
        type: ADD_USER,
        payload: { name, wallet },
    };
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            if (!action.type.includes('@@redux'))
                console.log('action not available to userReducer');
            return state;
    }
}
