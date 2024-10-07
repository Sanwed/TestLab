import {createSlice} from "@reduxjs/toolkit";


export const navSlice = createSlice({
  name: "nav",
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNav: (state) => {
      state.isOpen = false
    },
  }
})

export const {toggleNav, closeNav} = navSlice.actions;
