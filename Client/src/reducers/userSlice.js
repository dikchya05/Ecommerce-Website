import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: '',
  token: '',
  userRole: '',
  email:''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      const { fullName, userRole, email } = actions.payload
      state.fullName = fullName
      state.email = email
      state.userRole = userRole
    },
    resetUserDetails: (state, actions) => {
      state.fullName = ''
      state.userRole = ''
      state.email = ''
    },
  }
});

export const { setUserDetails, resetUserDetails } = userSlice.actions;
export default userSlice.reducer;


