
import { Introduce } from "./Introduce";
import { LearnMore } from "./LearnMore";
import { Services } from "./Services";

export const Main = () => {
  return (
    <main className="flex flex-col gap-10 justify-evenly items-center">
      <Introduce/>
      <LearnMore/>
      <Services/>
    </main>
  );
};
