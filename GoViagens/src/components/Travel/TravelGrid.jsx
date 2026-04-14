import { travelCards } from "./travelData";
import FadeIn from "../UI/FadeIn";
import FeaturedCard from "./FeatureCard";
import CompactCard from "./CompactCard";

function TravelGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {travelCards.map((card, index) => (
        <FadeIn key={card.id} delay={index * 0.2}>
          {card.type === "featured" ? (
            <FeaturedCard {...card} />
          ) : (
            <CompactCard {...card} />
          )}
        </FadeIn>
      ))}
    </div>
  );
}

export default TravelGrid;
