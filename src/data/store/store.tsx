import {configureStore, Tuple} from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice.tsx';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: () => new Tuple(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;