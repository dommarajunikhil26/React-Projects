import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk';
import appReducers from './reducers';

const ReduxStore = () => {
    const store = configureStore({
        reducer: appReducers, // This should point to the combined reducers
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

    return store;
}


export default ReduxStore;
