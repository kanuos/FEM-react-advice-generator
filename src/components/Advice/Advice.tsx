import { FC } from "react";
import type { AdvicePropType } from "./_";

export const Advice: FC<AdvicePropType> = ({ advice, slip_id }) => {
  return (
    <article
      className="m-6 p-12 flex flex-col items-center justify-center text-center gap-6 
    font-extrabold bg-neutral-2 rounded-lg drop-shadow-xl max-w-lg">
      {/* qupote ID */}
      <small
        aria-label="advice-id"
        className="text-xs uppercase tracking-widest text-primary-2">
        Advice #{slip_id}
      </small>

      {/* quote body */}
      <blockquote aria-label="advice" className="text-2xl text-primary-1">
        <span>&ldquo;</span>
        {advice}
        <span>&rdquo;</span>
      </blockquote>

      {/* responsive divider image */}
      <picture className="py-8">
        <source
          media="(min-width: 1440px)"
          srcSet="/pattern-divider-desktop.svg"
        />
        <img src="/pattern-divider-mobile.svg" alt="" />
      </picture>
    </article>
  );
};
