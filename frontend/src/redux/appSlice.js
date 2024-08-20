import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user: null,
  },
  reducers: {
    //actions
    setOpen: (state, action) => {
      state.open = action.payload;
    },

    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOpen, setAuthUser } = appSlice.actions;
export default appSlice.reducer;
