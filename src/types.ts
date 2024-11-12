export interface Vacancy {
  id: string;
  name: string;
  area: {
    name: string;
  };
  salary: Salary;
  alternate_url: string;
  employer: {
    name: string;
  };
  experience: {
    name: string;
  };
  work_format?: {
    id: string;
    name: string;
  }[];
}

export interface Salary {
  from: number | null;
  to: number | null;
  currency: string;
}

export interface Response {
  items: Vacancy[];
  pages: number;
  page: number;
}

export interface SearchParams {
  search: string;
  skills: string[];
  city: "1" | "2" | null;
  page: number;
}

export enum City {
  MOSCOW = "Москва",
  SPB = "Санкт-Петербург",
  ALL = "Все города",
}
