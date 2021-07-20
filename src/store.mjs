import redux from 'redux';
import rootReducer from './rootReducer.mjs';
import { addUser } from './features/users/userSlice.mjs';
import { ADD_USER } from './constants.mjs';

const store = redux.createStore(rootReducer);

store.prettyPrint = () => {
    return JSON.stringify(store.getState(), null, 2);
};

const unsubscribe = store.subscribe(() => {
    console.log('action dispatched!', store.getState().user);
});

store.dispatch(
    addUser({
        name: 'Runtime',
        wallet: {
            GBP: 2_000_000,
            BTC: 10_000,
            DOGE: 64_234_213,
        },
    })
);

export default store;

// /Users/rick.hallett/dev/redux/reduxten/src/store.mjs
