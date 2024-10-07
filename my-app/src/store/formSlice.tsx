import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const formSlice = createSlice({
  name: "form",
  initialState: {
    errors: {} as Record<string, string>,
    values: {} as Record<string, string>,
  },
  reducers: {
    checkErrors(state, action: PayloadAction<[string, string]>) {
      const [name, errMessage] = action.payload;
      if (errMessage) {
        state.errors[name] = errMessage;
      } else {
        delete state.errors[name]
      }
    },

    setValues(state, action: PayloadAction<[string, string]>) {
      const [name, value] = action.payload;
      state.values[name] = value;
    }
  }
})

export const {checkErrors, setValues} = formSlice.actions;
