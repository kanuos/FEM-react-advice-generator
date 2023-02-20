import { FC } from "react";
import { CardProps } from "./_";

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="h-auto w-fit">{children}</div>;
};
