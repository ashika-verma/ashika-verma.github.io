type HeaderProps = {
  title: string;
};
export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col sm:items-start items-center">
      <h1 className="text-2xl mt-2">{title}</h1>
    </div>
  );
};
