import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, RenderResult } from "@testing-library/react";
import { Advice } from "./Advice";
import { AdvicePropType } from "./_";

const adviceObjects: AdvicePropType = {
  slip_id: 117,
  advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
};

afterEach(cleanup);

describe("Unit Test: Advice.tsx", () => {
  it("should render the Advice component on DOM", async () => {
    const { getByRole } = renderAdvice();
    const advice = getByRole("article");
    expect(advice).not.toBeNull();
  });

  describe("Advice -> SLIP ID", () => {
    it("should display the slip ID as a <small> element", () => {
      const label = getAdviceID();
      expect(label.tagName).toMatch(/small/i);
    });

    it("should show 'ADVICE #117'", () => {
      const label = getAdviceID();
      expect(label.textContent).toMatch(
        new RegExp(`advice #${adviceObjects.slip_id}`, "i")
      );
    });

    it("should be uppercased", () => {
      const label = getAdviceID();
      expect(label.classList.contains("uppercase")).toBe(true);
    });

    it("should be spaced sufficiently", () => {
      const label = getAdviceID();
      expect(label.classList.contains("tracking-widest")).toBe(true);
    });
  });

  describe("Advice -> Body", () => {
    it("should be a <blockquote>", () => {
      const blockquote = getQuoteBody();
      expect(blockquote).not.toBeNull();
      expect(blockquote.tagName).toMatch(/blockquote/i);
    });
    it("should display the advice text wrapped by quotes", () => {
      const blockquote = getQuoteBody();
      expect(blockquote.textContent).toMatch(
        new RegExp(adviceObjects.advice, "i")
      );
      expect(blockquote.textContent).not.toMatch(/test/);
    });
    it("should be large and white", () => {
      const quote = getQuoteBody();
      expect(quote.classList.contains("text-2xl")).toBe(true);
      expect(quote.classList.contains("text-primary-1")).toBe(true);
    });
  });

  describe("Advice -> divider image", () => {
    it("should render the divider image", () => {
      const advice = renderAdvice();
      const dividerImg = advice.getByRole("img");
      expect(dividerImg).toBeTruthy();
      expect(dividerImg.tagName).toMatch(/img/i);
    });
  });
});

// utils
function renderAdvice(): RenderResult {
  return render(<Advice {...adviceObjects} />);
}

function getAdviceID(): HTMLElement {
  const { getByLabelText } = renderAdvice();
  const label = getByLabelText("advice-id");
  return label;
}

function getQuoteBody(): HTMLElement {
  const { getByLabelText } = renderAdvice();
  const blockquote = getByLabelText("advice");
  return blockquote;
}
