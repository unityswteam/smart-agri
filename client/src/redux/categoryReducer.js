import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const NODE_URL = import.meta.env.VITE_NODE_URL;
const REACT_URL = import.meta.env.VITE_REACT_URL;

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

export const addCategory = createAsyncThunk(
  "data/addCategory",
  async ({ name, description }) => {
    console.log(`Adding category ${name} with description ${description} to:`, `${NODE_URL}/categories/add`);
    await axios.post(`${NODE_URL}/categories/add`, {
      name,
      description,
    });
    console.log(`Adding category ${name} with description ${description} to:`, `${NODE_URL}/categories/add`);

    return { name, description };
  }
);

export const deleteCategory = createAsyncThunk(
  "data/deleteCategory",
  async (id) => {
    await axios.delete(`${NODE_URL}/categories/delete/${id}`);

    return id;
  }
);

export const updateCategory = createAsyncThunk(
  "data/updateCategory",
  async ({ id, name, description }) => {
    await axios.put(`${NODE_URL}/categories/edit/${id}`, {
      name,
      description,
    });

    return { name, description, _id: id };
  }
);

export const fetchCategories = createAsyncThunk(
  "data/fetchCategories",
  async () => {
    const result = await axios.get(`${NODE_URL}/categories`);

    return result.data.data;
  }
);

const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (cat) => cat.id !== action.payload
        );
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const { id, name, description } = action.payload;
        const catIndex = state.categories.findIndex((cat) => cat.id === id);
        if (catIndex !== -1) {
          state.categories[catIndex] = {
            ...state.categories[catIndex],
            name,
            description,
          };
        }
      });
  },
});

export default categoryReducer.reducer;
