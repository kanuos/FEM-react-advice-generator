import { FC } from "react";
import { Layout } from "../Layout/Layout";
import type { AdvicePropType } from "./_";

export const Advice: FC<AdvicePropType> = ({ advice, slip_id }) => {
  return (
    <Layout>
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
    </Layout>
  );
};
