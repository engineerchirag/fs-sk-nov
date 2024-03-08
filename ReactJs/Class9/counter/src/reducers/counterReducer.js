import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
        state.count += action.payload;
    },
    decrease: (state, action) => {
        state.count -= action.payload;
    },
    change: (state, action) => {
        const val = action.payload != "" ? Number(action.payload) : "";
        state.count = val;
    }
  }
});

export const { increase, decrease, change } = counterSlice.actions;

export default counterSlice.reducer;