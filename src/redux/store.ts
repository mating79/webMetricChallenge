import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
