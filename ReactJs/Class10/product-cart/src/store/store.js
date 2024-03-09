import { configureStore } from '@reduxjs/toolkit'
import productListReducer from '../reducers/productList.reducer'
import cartReducer from '../reducers/cart.reducer'

export const store = configureStore({
  reducer: {
    products: productListReducer,
    cart: cartReducer
  },
})