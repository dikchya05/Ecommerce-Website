import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: '',
  token: '',
  userRole: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      const { fullName, userRole } = actions.payload
      state.fullName = fullName
      state.userRole = userRole
    },
    resetUserDetails: (state, actions) => {
      state.fullName = ''
      state.userRole = ''
    },
  }
});

export const { setUserDetails, resetUserDetails } = userSlice.actions;
export default userSlice.reducer;


