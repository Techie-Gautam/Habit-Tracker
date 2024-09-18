import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habit-slice";

const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});

export default store;
