import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const NODE_URL = import.meta.env.VITE_NODE_URL;

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

// Fetch categories
export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
  const { data } = await axios.get(`${NODE_URL}/categories`);
  return data.data || [];
});

// Add category
export const addCategory = createAsyncThunk("category/addCategory", async (payload) => {
  const { data } = await axios.post(`${NODE_URL}/categories/add`, payload);
  return data.data || payload;
});

// Update category
export const updateCategory = createAsyncThunk("category/updateCategory", async (payload) => {
  const { id, ...rest } = payload;
  await axios.put(`${NODE_URL}/categories/edit/${id}`, rest);
  return { id, ...rest };
});

// Delete category
export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id) => {
  await axios.delete(`${NODE_URL}/categories/delete/${id}`);
  return id;
});

const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((cat) => cat._id !== action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const { id, ...rest } = action.payload;
        const index = state.categories.findIndex((cat) => cat._id === id);
        if (index !== -1) state.categories[index] = { ...state.categories[index], ...rest };
      });
  },
});

export default categoryReducer.reducer;
