import ky from "ky";
import { baseUrl } from "./constants";
import { Response, SearchParams } from "../types";
import { defaultSkills } from "../constants/defaultSkills";

export const getVacancies = async (params: SearchParams | undefined) => {
  let response;
  const url = new URL("/vacancies", baseUrl);
  url.searchParams.append("per_page", "10");
  url.searchParams.append("industry", "7");
  url.searchParams.append("professional_role", "96");
  url.searchParams.append("vacancy_search_fields", "name,company_name");

  if (!params) {
    url.searchParams.append("page", "0");
    url.searchParams.append("skill_set", defaultSkills.join(","));

    response = await ky.get<Response>(url).json();
  } else {
    const { search, skills, city, page } = params;
    url.searchParams.append("page", page.toString());
    if (search) url.searchParams.append("text", search);
    if (skills) url.searchParams.append("skill_set", skills.join(","));
    if (city) url.searchParams.append("area", city);

    response = await ky.get<Response>(url).json();
  }

  return response;
};
