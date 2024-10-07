import {configureStore} from "@reduxjs/toolkit";
import {buttonSlice} from "./buttonSlice.tsx";
import {reviewSlice} from "./reviewSlice.tsx";
import {faqSlice} from "./faqSlice.tsx";
import {formSlice} from "./formSlice.tsx";
import {navSlice} from "./navSlice.tsx";

const store = configureStore({
  reducer: {
    button: buttonSlice.reducer,
    review: reviewSlice.reducer,
    faq: faqSlice.reducer,
    form: formSlice.reducer,
    nav: navSlice.reducer,
  },
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store;
