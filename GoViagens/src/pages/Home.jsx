import { Suspense, lazy } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const TravelSection = lazy(() => import("../components/Travel/TravelSection"));
const AviatourSection = lazy(
  () => import("../components/Aviatour/AviatourSection"),
);
const DiscoverSection = lazy(
  () => import("../components/Discover/DiscoverSection"),
);
const CTASection = lazy(() => import("../components/CTA/CTASection"));
const FooterSection = lazy(() => import("../components/Footer/Footer"));

function SectionFallback({ className }) {
  return <div className={className} aria-hidden="true" />;
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Suspense fallback={<SectionFallback className="min-h-190" />}>
          <TravelSection />
        </Suspense>

        <Suspense fallback={<SectionFallback className="min-h-225" />}>
          <AviatourSection />
        </Suspense>

        <Suspense fallback={<SectionFallback className="min-h-180" />}>
          <DiscoverSection />
        </Suspense>

        <Suspense fallback={<SectionFallback className="min-h-90" />}>
          <CTASection />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback className="min-h-105" />}>
        <FooterSection />
      </Suspense>
    </>
  );
}

export default Home;
