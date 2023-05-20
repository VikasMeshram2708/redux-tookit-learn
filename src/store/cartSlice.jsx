// Basically we can organise out store data in small pieces.

/* 
Create Slice 
them export the  reducers
*/
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // reducers are nothing but pure functions.
    // functions
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

// slice also gives us the reducer
export default cartSlice.reducer;
