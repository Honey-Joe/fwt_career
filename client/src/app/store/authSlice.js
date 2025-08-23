import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.user?.email === email && state.user?.password === password) {
        state.user.loggedIn = true;
      } else {
        alert("Invalid credentials!");
      }
    },
    logoutUser: (state, action) => {
      state.user.loggedIn = false;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
