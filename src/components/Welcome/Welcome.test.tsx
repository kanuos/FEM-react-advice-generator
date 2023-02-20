import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Welcome } from "./Welcome";

describe("Unit test Welcome.tsx", () => {
  it("should render the component", () => {
    const { getByRole, getByLabelText } = render(<Welcome />);

    // welcome container
    const welcomeBlock = getByRole("article");
    expect(welcomeBlock).toBeTruthy();
    expect(welcomeBlock.getAttribute("id")).toMatch("welcome");

    // divider
    const dividerImg = getByRole("img") as HTMLImageElement;
    expect(dividerImg).toBeTruthy();
    expect(dividerImg.src).toMatch(/pattern-divider/i);

    // welcome header
    const welcomeHeading = getByLabelText("welcome-heading");
    expect(welcomeHeading).toBeTruthy();
    expect(welcomeHeading.tagName).toMatch(/small/i);
    expect(welcomeHeading.textContent).toMatch(/advice generator/i);
    expect(welcomeHeading.textContent).not.toMatch("hello world");

    // welcome body
    const welcomeBody = getByLabelText("welcome-body");
    expect(welcomeBody).toBeTruthy();
    expect(welcomeBody.tagName).toEqual("P");
    expect(welcomeBody.textContent).toEqual(
      `Click on the button below to generate an advice!`
    );
  });
});
