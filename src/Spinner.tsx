export const Spinner = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`${className} inline-block h-4 w-4 animate-spin rounded-full border border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
      role="status"
    ></div>
  );
};
