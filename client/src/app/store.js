import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/categoryReducer";
import roleReducer from "../redux/roleReducer";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    role: roleReducer,
  }
})
