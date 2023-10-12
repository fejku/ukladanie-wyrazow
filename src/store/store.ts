import { configureStore } from "@reduxjs/toolkit";
import livesReducer from "./features/livesSlice";
import bearsReducer from "./features/bearsSlice";
import stagesSlice from "./features/stagesSlice";
import wordsSlice from "./features/wordsSlice";

export const store = configureStore({
  reducer: {
    lives: livesReducer,
    bears: bearsReducer,
    stage: stagesSlice,
    words: wordsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
