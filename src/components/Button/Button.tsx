// built in imports
import { FC, memo } from "react";

// ts support
import type { ButtonProps } from "./_";

// static assets
import loader from "/loader.svg";
import dice from "/icon-dice.svg";

const Button: FC<ButtonProps> = ({ isLoading, onClickCallback }) => {
  return (
    <button
      onClick={onClickCallback}
      disabled={isLoading}
      className="bg-primary-2 p-5 relative bottom-0 left-1/2 -translate-y-full -translate-x-1/2 rounded-full group 
      enabled:hover:drop-shadow-[0px_1px_1rem_hsl(150_100%_66%)] enabled:hover:scale-110 disabled:brightness-75
       disabled:cursor-not-allowed transition-all">
      <img
        src={isLoading ? loader : dice}
        alt={isLoading ? "Loading" : "Click me"}
        className="group-disabled:opacity-50 group-disabled:animate-spin group-enabled:group-hover:scale-105 transition-all"
      />
    </button>
  );
};

export const MemoizedButton = memo(Button);
