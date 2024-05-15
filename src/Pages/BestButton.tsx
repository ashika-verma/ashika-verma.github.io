export default () => {
  return (
    <div className="flex justify-center items-center h-full">
      <button
        className="px-2 scroll-py-14 shadow hover:shadow-md rounded text-4xl text-slate-100 active:shadow-none bg-gradient-to-r from-cyan-500 to-blue-500"
        onClick={() => alert("this is the best button")}
      >
        Celebration
      </button>
    </div>
  );
};
