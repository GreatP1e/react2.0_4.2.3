import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { City, SearchParams, Vacancy } from "../types";
import { fetchVacancies } from "./thunk";
import { defaultSkills } from "../constants/defaultSkills";

interface VacanciesState {
  vacancies: Vacancy[];
  pages: number;
  page: number;
}

const initialStateVacancies: VacanciesState = {
  vacancies: [],
  pages: 0,
  page: 0,
};

const initialStateSearchParams: SearchParams = {
  search: "",
  skills: defaultSkills,
  city: null,
  page: 1,
};

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState: initialStateVacancies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.fulfilled, (_, action) => {
      return {
        vacancies: action.payload.items,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    });
  },
});

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: initialStateSearchParams,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    addSkill(state, action: PayloadAction<string>) {
      state.skills = [...state.skills, action.payload];
    },
    dellSkill(state, action: PayloadAction<number>) {
      state.skills = state.skills.filter(
        (_, index) => index !== action.payload
      );
    },
    setCity(state, action: PayloadAction<City>) {
      switch (action.payload) {
        case City.MOSCOW: {
          state.city = "1";
          break;
        }
        case City.SPB: {
          state.city = "2";
          break;
        }
        case City.ALL: {
          state.city = null;
          break;
        }
      }
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearch, addSkill, dellSkill, setCity, setPage } =
  searchParamsSlice.actions;
