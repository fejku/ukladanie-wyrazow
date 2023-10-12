import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./wordsSlice";

const initialState = { bears: 0, pointsInARow: 0 };

export const bearSlice = createSlice({
  name: "bears",
  initialState,
  reducers: {
    gainPoint: (state) => {
      const newPointsInARow = state.pointsInARow + 1;

      if (newPointsInARow === 2) {
        state.pointsInARow = 0;
        state.bears += 1;
      } else {
        state.pointsInARow += 1;
      }
    },
    losePoint: (state) => {
      state.pointsInARow = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state) => {
      state.pointsInARow = 0;
      state.bears = 0;
    });
  },
});

export const { gainPoint, losePoint } = bearSlice.actions;

export default bearSlice.reducer;
