import { Salary } from "../types";

export const formatSalary = (salary: Salary) => {
  const { from, to, currency } = salary;
  if (to && from) {
    return `${from} - ${to} ${currency}`;
  }
  if (from === null && to) {
    return `${to} ${currency}`;
  }
  return `${from} ${currency}`;
};
