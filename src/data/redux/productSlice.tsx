import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../models/Product.tsx';
import productsData from '../../data/products.json';

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: productsData,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        removeProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter(product => product.id != action.payload)
        }
    },
});

export const {removeProduct} = productsSlice.actions;
export default productsSlice.reducer;