import { FiChevronRight } from "react-icons/fi";
import { heroCategories } from "./heroData";

function HeroCategories() {
  return (
    <div className="mt-8 inline-flex max-w-full flex-col items-start gap-3 self-center rounded-[28px] bg-white/96 p-3 text-left sm:mt-12 sm:gap-4 sm:p-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-5 md:px-6 md:py-4 lg:mt-14 lg:flex-nowrap lg:gap-10">
      {heroCategories.map((item) => (
        <p
          key={item.label}
          className="inline-flex items-center justify-between gap-2 rounded-full px-3 py-2 text-sm font-medium leading-none text-gray-700 sm:text-sm md:justify-center md:px-0 md:py-0 md:text-base"
        >
          {item.label}
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white sm:h-5 sm:w-5 md:h-6 md:w-6">
            <FiChevronRight />
          </span>
        </p>
      ))}
    </div>
  );
}

export default HeroCategories;
