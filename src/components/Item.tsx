import { ReactNode } from "react";

export const Item = ({
  title,
  description,
}: {
  title: string;
  description: string | ReactNode;
}) => {
  return (
    <div className="mb-4 flex flex-col sm:items-start items-center">
      <h2 className="text-xl text-slate-500 dark:text-slate-400 mb-2">
        {title}
      </h2>
      <p className="text-slate-950 dark:text-slate-300 text-xs w-full">
        {description}
      </p>
    </div>
  );
};
