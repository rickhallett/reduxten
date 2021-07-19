import { combineReducers } from 'redux';
import exchangeReducer from './features/exchange/exchangeSlice.mjs';
import userReducer from './features/users/userSlice.mjs';

const rootReducer = combineReducers({
    exchange: exchangeReducer,
    user: userReducer,
});

export default rootReducer;
