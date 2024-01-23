import { configureStore } from "@reduxjs/toolkit";
import userCredentials from "./credentialsSlice";

export const store = configureStore({
  reducer: {
    credentials: userCredentials,
  },
});
