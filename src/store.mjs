import redux from 'redux';
import rootReducer from './rootReducer.mjs';

const store = redux.createStore(rootReducer);

store.prettyPrint = () => {
    return JSON.stringify(store.getState(), null, 2);
};

const unsubscribe = store.subscribe(() => {
    console.log('action dispatched!');
});

store.dispatch({ type: 'test/test' });

export default store;

// /Users/rick.hallett/dev/redux/reduxten/src/store.mjs
