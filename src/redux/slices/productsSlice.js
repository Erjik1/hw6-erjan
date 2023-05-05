import {createSlice} from "@reduxjs/toolkit";
import json from './data.json'

const initialState  = {
    products: json
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer;
export const prodSelect = state => state.productsSlice;