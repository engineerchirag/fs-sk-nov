import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.list = action.payload
    }
  },
})

export const { setProducts } = productListSlice.actions;

export default productListSlice.reducer;