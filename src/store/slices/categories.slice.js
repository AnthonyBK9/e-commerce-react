import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal } from './isLoading.slice';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategories: (state, action) => action.payload
    }
})

export const { setCategories } = categoriesSlice.actions;

export const getAllCategories = () => (dispatch) => {
    dispatch(setIsLoadingGlobal(true))
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    return axios.get(URL)
        .then(res => dispatch(setCategories(res.data.data.categories)))
        .catch(err => console.log(err.data))
        .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export default categoriesSlice.reducer;
