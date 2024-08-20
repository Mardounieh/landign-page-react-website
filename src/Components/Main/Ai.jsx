import { SmallSquares } from "../SVGs/SmallSquares";
import { Forecasting } from "./Cards/Forecasting";
import { ForecastingBg } from "./Cards/ForecastingBg";
import { GeniusPreview } from "./Cards/GeniusPreview";
import { IntroCard } from "./Cards/IntroCard";
import { GeniusIntro } from "./GeniusIntro";

export const Ai = () => {
  return (
    <section className="w-10/12 flex flex-col gap-10">
      <GeniusIntro />
      <div className="md:grid lg:grid-cols-2 gap-5">
        <IntroCard
          background={<ForecastingBg />}
          tags={<Forecasting />}
          title="Smart forecasting"
          description="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
        />
        <IntroCard
          background={<SmallSquares />}
          tags={<GeniusPreview />}
          title="Chat with Genius"
          description="Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless."
        />
      </div>
    </section>
  );
};
