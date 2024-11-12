import { screen, fireEvent, within } from "@testing-library/react";
import { render } from "./test/utils.js";
import App from "./App";
// @ts-ignore
import { server } from "./test/moks/server.js";
import { it, describe, beforeEach, afterEach, expect } from "vitest";

describe("should render App", () => {
  beforeEach(() => {
    server.listen();
    render(<App />);
  });
  afterEach(() => {
    server.resetHandlers();
  });

  it("should render App", () => {
    screen.getByText(/Список вакансий/i);
  });

  it("should render List", async () => {
    await screen.findByText("Company A");
  });

  it("should work pagination", async () => {
    await screen.findByText("Company A");
    const pagination = await screen.findByTestId("pagination");
    const btn = within(pagination).getByText("2");
    fireEvent.click(btn);
    await screen.findByText("Company K");
  });

  it("should work search", async () => {
    await screen.findByText("Company A");
    const input = await screen.findByPlaceholderText(
      "Должность или название компании"
    );
    const btn = await screen.findByText(/Найти/i);
    fireEvent.input(input, { target: { value: "Frontend" } });
    fireEvent.click(btn);
    await screen.findByText("Company Z");
  });

  it("should change city", async () => {
    const input = await screen.findByTestId("city-input");
    fireEvent.click(input);
    const options = await screen.findByTestId("city-options");
    const moscowBtn = within(options).getByText(/Москва/i);
    fireEvent.click(moscowBtn);
    within(input).getByText(/Москва/i);
  });

  it("should add skills", async () => {
    const skills = await screen.findByTestId("skills");
    const input = await screen.findByPlaceholderText("Навык");
    const btn = await screen.findByTestId("skill-add-btn");
    fireEvent.input(input, { target: { value: "HTML" } });
    fireEvent.click(btn);
    within(skills).getByText(/HTML/i);
  });

  it("should delete skills", async () => {
    const skillsGroup = await screen.findByTestId("skills-group");
    const skillsLength = within(skillsGroup).getAllByTestId("skill").length;
    const [btn] = within(skillsGroup).getAllByTestId("skill-remove-btn");
    fireEvent.click(btn);
    const newSkillsLength = within(skillsGroup).getAllByTestId("skill").length;
    expect(newSkillsLength).toBe(skillsLength - 1);
  });
});
