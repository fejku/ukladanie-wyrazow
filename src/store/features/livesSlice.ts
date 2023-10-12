import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./wordsSlice";
import { LIVES_AMOUNT } from "../../consts";

const initialState = { lives: 5 };

export const livesSlice = createSlice({
  name: "lives",
  initialState,
  reducers: {
    loseLive: (state) => {
      state.lives -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state) => {
      state.lives = LIVES_AMOUNT;
    });
  },
});

export const { loseLive } = livesSlice.actions;

export default livesSlice.reducer;
