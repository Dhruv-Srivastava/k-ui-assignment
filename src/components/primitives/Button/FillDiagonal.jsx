export default function ButtonFillDiagonal({ children, className, ...props }) {
  return (
    <button className="relative items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium rounded-xl group">
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-clrPurple3 opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-clrPurple3 opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-clrWhite1 transition-colors duration-200 ease-in-out">
        {children}
      </span>
      <span className="absolute inset-0 border border-clrPurple3 rounded-xl"></span>
    </button>
  );
}
