import { FC } from "react";
import { LayoutProps } from "./_";

export const Layout: FC<LayoutProps> = ({ id, children }) => {
  return (
    <article
      id={id}
      className="m-6 p-12 flex flex-col items-center justify-center text-center gap-6 
    font-extrabold bg-neutral-2 rounded-lg drop-shadow-xl max-w-lg">
      {/* content */}
      {children}
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
