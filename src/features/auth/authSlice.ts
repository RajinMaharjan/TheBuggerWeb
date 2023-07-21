import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loginModalOpen: false,
  signupModalOpen: false,
  forgotModal: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    loginOpen: (state) => {
      state.loginModalOpen = true;
      state.forgotModal = false;
      state.signupModalOpen = false;
    },
    loginClose: (state) => {
      state.loginModalOpen = false;
    },
    signupClose: (state) => {
      state.signupModalOpen = false;
    },
    signupOpen: (state) => {
      state.loginModalOpen = false;
      state.signupModalOpen = true;
    },
    forgotOpen: (state) => {
      state.forgotModal = true;
    },
    forgotClose: (state) => {
      state.forgotModal = false;
    },
  },
});

// console.log(authSlice);
export const {
  logIn,
  logOut,
  loginOpen,
  signupOpen,
  loginClose,
  signupClose,
  forgotOpen,
  forgotClose,
} = authSlice.actions;

export default authSlice.reducer;
