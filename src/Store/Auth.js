import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { AuthState: false };

const authSlice = createSlice({
  name: "AuthState",
  initialState: initialAuthState,
  reducers: {
    Login(state) {
      state.AuthState = true;
    },
    Logout(state) {
      state.AuthState = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
