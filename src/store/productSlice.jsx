// Basically we can organise out store data in small pieces.

/* 
Create Slice 
them export the  reducers

The API is long time task
like when the api is in pending state we can show loading spinner.

*/
import { createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  // to prevent a hacker from changing the state
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [], // it wil be the list of our products
    status: STATUSES.IDLE, // this is the by default state
  },
  reducers: {
    // reducers are nothing but pure functions.
    // functions
    // note use this technique while useing normal workflow
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // builder is inbuild api in extraReducers
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

// slice also gives us the reducer
export default productSlice.reducer;

// Thunks is use to handle the ascynchronous functions
// in thunk we return a function inside the parent function

// Normal workflow
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     // update the loading state
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setProducts(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.error));
//     }
//   };
// }

// new type
// we have to pass a identifier and another is async function
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/productss');
  const data = await res.json();
  return data;
});
