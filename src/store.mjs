import redux from 'redux';
import rootReducer from './rootReducer.mjs';

const store = redux.createStore(rootReducer);

store.prettyPrint = () => {
    return JSON.stringify(store.getState(), null, 2);
};

export default store;
