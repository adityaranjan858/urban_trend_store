import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  data: [],
  isloading: false,
  error: "",
  searchedProducts: []
}
const baseURL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(baseURL)
  return response.data
})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.searchedProducts = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isloading = true
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isloading = false
        state.data = action.payload
        state.error = ""
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.isloading = false
        state.data = []
        state.error = action.error.message
      })

  }
});

export const { searchData } = productSlice.actions

export default productSlice.reducer