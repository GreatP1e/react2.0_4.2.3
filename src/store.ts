import { configureStore } from "@reduxjs/toolkit";
import { searchParamsSlice, vacanciesSlice } from "./reducer/reducer";

export const store = configureStore({
  reducer: {
    vacancies: vacanciesSlice.reducer,
    searchParams: searchParamsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
