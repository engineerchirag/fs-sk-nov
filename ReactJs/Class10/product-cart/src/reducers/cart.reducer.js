import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {
        // productId1: 2,
        // productId2: 1
    }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items[action.payload] = 1;
    },
    removeFromCart: (state, action) => {
        delete state.items[action.payload];
    },
    increaseQuantity: (state, action) => {
        state.items[action.payload] += 1;
    },
    decreaseQuantity: (state, action) => {
        if (state.items[action.payload] > 1) {
            state.items[action.payload] -= 1;
        }
    },
    changeQuantity: (state, action) => {
        const productId = action.payload.productId;
        const finalCount = action.payload.value;
        if (finalCount) {
            state.items[productId] = Number(finalCount);
        }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
