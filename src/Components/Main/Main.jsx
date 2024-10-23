import { LastWord } from "./LastWord";
import { Ai } from "./Ai";
import { Introduce } from "./Introduce";
import { LearnMore } from "./LearnMore";
import { Services } from "./Services";

export const Main = () => {
  return (
    <main className="flex flex-col gap-16 justify-evenly items-center overflow-hidden">
      <Introduce/>
      <LearnMore/>
      <Services/>
      <Ai/>
      <LastWord />
    </main>
  );
};
