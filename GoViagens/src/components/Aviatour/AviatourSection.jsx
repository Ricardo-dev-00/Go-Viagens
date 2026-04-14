import { aviatourData } from "./aviatourData";
import FadeIn from "../UI/FadeIn";
import TimelineItem from "./TimeLineItem";

function AviatourSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-[0.3em] text-stone-800 uppercase sm:text-4xl">
            Por que Aviatour
          </h2>
        </FadeIn>

        <div className="relative mt-14 space-y-12">
          {/* LINHA CENTRAL */}
          <span className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-t from-stone-500/80 via-stone-400/45 to-transparent lg:block" />

          {aviatourData.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.2}>
              <TimelineItem {...item} isReversed={index % 2 !== 0} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AviatourSection;
