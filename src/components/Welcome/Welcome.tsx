import { FC } from "react";
import { Layout } from "../Layout/Layout";

export const Welcome: FC = () => {
  return (
    <Layout id="welcome">
      <small
        aria-label="welcome-heading"
        className="text-xs uppercase tracking-widest text-primary-2">
        advice generator
      </small>

      <p aria-label="welcome-body" className="text-2xl text-primary-1">
        Click on the button below to generate an advice!
      </p>
    </Layout>
  );
};
