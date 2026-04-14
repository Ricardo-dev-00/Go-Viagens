import { FiChevronRight } from "react-icons/fi";
import { heroCategories } from "./heroData";

function HeroCategories() {
  return (
    <div className="mt-8 flex w-full max-w-sm flex-col gap-2 self-center rounded-[28px] bg-white/96 p-3 text-left shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-sm sm:mt-12 sm:max-w-md sm:gap-3 sm:p-4 md:max-w-full md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-5 md:bg-white/96 md:px-6 md:py-4 md:shadow-none lg:mt-14 lg:flex-nowrap lg:gap-10">
      {heroCategories.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-900/3 px-4 py-3.5 text-sm font-medium leading-tight text-gray-700 transition hover:border-slate-300 hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent sm:text-base md:w-auto md:rounded-full md:border-transparent md:bg-transparent md:px-0 md:py-0 md:justify-center"
        >
          <span>{item.label}</span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:h-6 md:w-6">
            <FiChevronRight />
          </span>
        </a>
      ))}
    </div>
  );
}

export default HeroCategories;
