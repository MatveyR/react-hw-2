import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../models/Product.tsx';
import productsData from '../../products.json';

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
        },
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload)
        }
    },
});

export const {removeProduct, addProduct} = productsSlice.actions;
export default productsSlice.reducer;