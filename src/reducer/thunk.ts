import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVacancies } from "../api/getVacancies";
import { AppDispatch, RootState } from "../store";
import { Response, SearchParams } from "../types";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();

export const fetchVacancies = createAppAsyncThunk<
  Response,
  SearchParams | undefined
>("vacancies/fetchVacancies", async (params, { rejectWithValue }) => {
  try {
    const res = await getVacancies(params);
    return res;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
