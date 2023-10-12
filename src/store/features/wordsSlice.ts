import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { drawWords, wordToLetters } from "../../utils/utils";

const initialState = {
  words: [] as string[],
  actualWordIndex: 0,
  actualWord: "",
  actualWordFilename: "",
  letters: [] as string[],
  actualLetterIndex: 0,
  actualLetter: "",
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    reset: (state) => {
      const newWords = drawWords();
      const newActualWord = newWords[0];
      const newLetters = wordToLetters(newActualWord);
      const newActualLetter = newActualWord[0];

      state.words = newWords;
      state.actualWordIndex = 0;
      state.actualWord = newActualWord;
      state.actualWordFilename = newActualWord.toLowerCase();

      state.letters = newLetters;
      state.actualLetterIndex = 0;
      state.actualLetter = newActualLetter;
    },
    nextWord: (state) => {
      const newActualWordIndex = state.actualWordIndex + 1;
      const newActualWord = state.words[newActualWordIndex];

      state.actualWordIndex = newActualWordIndex;
      state.actualWord = newActualWord;
      state.actualWordFilename = newActualWord.toLowerCase();

      const newLetters = wordToLetters(newActualWord);
      const newActualLetter = newActualWord[0];

      state.letters = newLetters;
      state.actualLetterIndex = 0;
      state.actualLetter = newActualLetter;
    },
    nextLetter: (state, action: PayloadAction<number>) => {
      const newLetters = state.letters.filter(
        (_, index) => index !== action.payload
      );
      const newActualLetterIndex = state.actualLetterIndex + 1;

      state.letters = newLetters;
      state.actualLetterIndex = newActualLetterIndex;
      state.actualLetter = state.actualWord[newActualLetterIndex];
    },
    incrementWordIndex: (state) => {
      state.actualWordIndex += 1;
    },
  },
});

export const { incrementWordIndex, nextLetter, nextWord, reset } =
  wordsSlice.actions;

export default wordsSlice.reducer;
