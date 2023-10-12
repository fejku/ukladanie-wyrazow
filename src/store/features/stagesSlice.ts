import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./wordsSlice";

type Stage = "START_SCREEN" | "GAME" | "SCORE_SCREEN";

const initialState: { stage: Stage } = {
  stage: "START_SCREEN",
};

export const stagesSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    stageStartScreen: (state) => {
      state.stage = "START_SCREEN";
    },
    stageGame: (state) => {
      state.stage = "GAME";
    },
    stageScoreScreen: (state) => {
      state.stage = "SCORE_SCREEN";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state) => {
      state.stage = "GAME";
    });
  },
});

export const { stageStartScreen, stageGame, stageScoreScreen } =
  stagesSlice.actions;

export default stagesSlice.reducer;
