import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoadScreen } from "./LoadScreen";

describe("Unit test loader.tsx", () => {
  it("should render the component", () => {
    const { getByRole, getByLabelText } = render(<LoadScreen />);

    // loader container
    const loaderBlock = getByRole("article");
    expect(loaderBlock).toBeTruthy();
    expect(loaderBlock.getAttribute("id")).toMatch("loader");

    // divider
    const dividerImg = getByRole("img") as HTMLImageElement;
    expect(dividerImg).toBeTruthy();
    expect(dividerImg.src).toMatch(/pattern-divider/i);

    // loader header
    const loaderHeading = getByLabelText("loader-heading");
    expect(loaderHeading).toBeTruthy();
    expect(loaderHeading.tagName).toMatch(/small/i);
    expect(loaderHeading.textContent).toMatch(/advice generator/i);
    expect(loaderHeading.textContent).not.toMatch("hello world");

    // loader body
    const loaderBody = getByLabelText("loader-body");
    expect(loaderBody).toBeTruthy();
    expect(loaderBody.tagName).toEqual("P");
    expect(loaderBody.textContent).toEqual(
      `Please wait while we generate a great advice for you`
    );
  });
});
