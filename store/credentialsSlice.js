import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  personalNumber: "",
  customerId: "",
  token: "",
};

export const credentialsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {
        firstName,
        lastName,
        personalNumber,
        phoneNumber,
        email,
        customerId,
        token,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.personalNumber = personalNumber;
      state.phoneNumber = phoneNumber;
      state.customerId = customerId;
      state.email = email;
      state.token = token;
    },
    removeUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.personalNumber = "";
      state.phoneNumber = "";
      state.customerId = "";
      state.email = "";
    },
  },
});

export const { addUser, removeUser } = credentialsSlice.actions;

export default credentialsSlice.reducer;
