import { FC } from "react";
import { Layout } from "../Layout/Layout";

export const LoadScreen: FC = () => {
  return (
    <Layout id="loader">
      <small
        aria-label="loader-heading"
        className="text-xs uppercase tracking-widest text-primary-2">
        advice generator
      </small>

      <p aria-label="loader-body" className="text-2xl text-primary-1">
        Please wait while we generate a great advice for you
      </p>
    </Layout>
  );
};
