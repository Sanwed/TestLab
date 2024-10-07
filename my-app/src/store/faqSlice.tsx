import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FaqCardType} from "../types/types.tsx";


export const faqSlice = createSlice({
  name: "faq",
  initialState: {
    cards: [] as FaqCardType[]
  },
  reducers: {
    setSlides: (state, action: PayloadAction<FaqCardType[]>) => {
      state.cards = action.payload.map((card, index) => ({...card, order: index + 1}));
    },

    toggleHidden: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].isHidden = !state.cards[action.payload].isHidden;
    }
  }
})

export const {toggleHidden, setSlides} = faqSlice.actions;
