import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReviewType} from "../types/types.tsx";
import {shiftArrayToValue} from "../utils/utils.tsx";

export const reviewSlice = createSlice({
  name: 'slides',
  initialState: {
    slides: [] as ReviewType[],
    slidesToShow: 0,
    activeSlide: 1,
    visibleSlides: [] as ReviewType[],
  },
  reducers: {
    setSlides(state, action: PayloadAction<ReviewType[]>) {
      state.slides = action.payload.map((slide, index) => ({...slide, order: index + 1}));
    },

    setVisibleSlides(state, action: PayloadAction<number>) {
      state.slidesToShow = action.payload > state.slides.length ? state.slides.length : action.payload;
      state.visibleSlides = state.slides.slice(0, state.slidesToShow);
    },

    nextSlide(state) {
      const firstShifted = state.slides.shift();
      state.slides.push(firstShifted as ReviewType);
      state.activeSlide = state.slides[0].order as number
    },

    prevSlide(state) {
      const lastShifted = state.slides.pop();
      state.slides.unshift(lastShifted as ReviewType);
      state.activeSlide = state.slides[0].order as number
    },

    setSlide(state, action: { payload: number }) {
      shiftArrayToValue(state.slides, action.payload);
      state.activeSlide = state.slides[0].order as number
    }
  }
});

export const {setSlides, setVisibleSlides, setSlide, nextSlide, prevSlide} = reviewSlice.actions;
