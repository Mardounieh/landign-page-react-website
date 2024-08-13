import { IntroCard } from "./Cards/IntroCard";
import { GeniusIntro } from "./GeniusIntro";

export const Ai = () => {
  return (
    <section className="w-10/12 flex flex-col gap-10">
      <GeniusIntro />
      <div className="md:grid md:grid-cols-2 gap-5">
        <IntroCard/>
        <IntroCard/>
      </div>
    </section>
  );
};
