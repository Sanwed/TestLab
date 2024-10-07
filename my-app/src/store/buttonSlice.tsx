import {createSlice} from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: 'button text change',
  initialState: {
    buttonText: 'Проще простого!',
  },
  reducers: {
    changeButtonText(state, action) {
      state.buttonText = action.payload;
    },
  },
});

export const {changeButtonText} = buttonSlice.actions;
