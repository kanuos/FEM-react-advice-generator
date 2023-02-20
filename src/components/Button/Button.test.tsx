import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { MemoizedButton } from "./Button";

const dummyCallback = vi.fn();

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("Unit Test: Button.tsx", () => {
  describe("initial state", () => {
    const isLoading = false;
    it("should render default button", () => {
      const { getByRole } = renderButton(isLoading);

      const btn = getByRole("button") as HTMLButtonElement;
      const icon = getByRole("img") as HTMLImageElement;

      renderButtonUITest(isLoading, btn, icon);
    });

    it("should run callback when clicked", () => {
      const { getByRole } = renderButton(isLoading);

      const btn = getByRole("button") as HTMLButtonElement;
      expect(dummyCallback).not.toHaveBeenCalled();

      fireEvent.click(btn);
      expect(dummyCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe("loading state", () => {
    const isLoading = true;
    it("should render spinner button", () => {
      const { getByRole } = renderButton(isLoading);

      const btn = getByRole("button") as HTMLButtonElement;
      const icon = getByRole("img") as HTMLImageElement;

      renderButtonUITest(isLoading, btn, icon);
    });

    it("should run callback when clicked", () => {
      const { getByRole } = renderButton(isLoading);

      const btn = getByRole("button") as HTMLButtonElement;
      expect(dummyCallback).not.toHaveBeenCalled();

      fireEvent.click(btn);
      expect(dummyCallback).not.toHaveBeenCalled();
    });
  });
});

// utils
function renderButton(loadingState: boolean): RenderResult {
  return render(
    <MemoizedButton isLoading={loadingState} onClickCallback={dummyCallback} />
  );
}

function renderButtonUITest(
  isLoading: boolean,
  btn: HTMLButtonElement,
  icon: HTMLImageElement
) {
  // button and icon should be rendered
  expect(btn).not.toBeFalsy();
  expect(icon).not.toBeFalsy();

  // disabled state
  expect(btn.disabled).toBe(isLoading);

  if (isLoading) {
    expect(icon.src).toMatch(/loader/i);
    expect(icon.alt).toMatch(/loading/i);
  } else {
    expect(icon.src).toMatch(/icon-dice/i);
    expect(icon.alt).toMatch(/click me/i);
  }
}
