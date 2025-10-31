import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const NODE_URL = import.meta.env.NODE_URL;
const REACT_URL = import.meta.env.REACT_URL;

const initialState = {
  roles: [],
  loading: false,
  error: "",
};

export const addRole = createAsyncThunk(
  "data/addRole",
  async ({ name, description }) => {
    await axios.post(`${NODE_URL}/roles/add`, {
      name,
      description,
    });

    return { name, description };
  }
);

export const deleteRole = createAsyncThunk(
  "data/deleteRole",
  async (id) => {
    await axios.delete(`${NODE_URL}/roles/delete/${id}`);

    return id;
  }
);

export const updateRole = createAsyncThunk(
  "data/updateRole",
  async ({ id, name, description }) => {
    await axios.put(`${NODE_URL}/roles/edit/${id}`, {
      name,
      description,
    });

    return { name, description, id };
  }
);

export const fetchRoles = createAsyncThunk(
  "data/fetchRoles",
  async () => {
    const result = await axios.get(`${NODE_URL}/roles`);

    return result.data;
  }
);

const roleReducer = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.roles.push(action.payload);
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.roles = state.roles.filter(
          (role) => role.id !== action.payload
        );
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        const { id, name, description } = action.payload;
        const roleIndex = state.roles.findIndex((role) => role.id === id);
        if (roleIndex !== -1) {
          state.roles[roleIndex] = {
            ...state.roles[roleIndex],
            name,
            description,
          };
        }
      });
  },
});

export default roleReducer.reducer;
