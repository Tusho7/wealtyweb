import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  personalNumber: "",
  phoneNumber: "",
  email: "",
};

export const credentialsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName, personalNumber, phoneNumber, email } =
        action.payload;
      state = { firstName, lastName, personalNumber, phoneNumber, email };
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { addUser, removeUser } = credentialsSlice.actions;

export default credentialsSlice.reducer;
