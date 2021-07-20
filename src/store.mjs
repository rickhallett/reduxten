import redux from 'redux';
import rootReducer from './rootReducer.mjs';
import { ADD_USER } from './constants.mjs';

const store = redux.createStore(rootReducer);

store.prettyPrint = () => {
    return JSON.stringify(store.getState(), null, 2);
};

const unsubscribe = store.subscribe(() => {
    console.log('action dispatched!', store.getState().user);
});

store.dispatch({ type: ADD_USER, payload: {} });

export default store;

// /Users/rick.hallett/dev/redux/reduxten/src/store.mjs
