export default function ShimmerButton({ children, className, ...props }) {
  
  return (
    <button className="relative py-3 px-9 rounded-xl bg-clrPurple1 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clrPurple1 overflow-hidden group transition-all duration-300 ease-out hover:ring-2 hover:ring-clrPurple1 hover:ring-offset-2">
      {children}
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-clrWhite1 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
    </button>
  );
}
