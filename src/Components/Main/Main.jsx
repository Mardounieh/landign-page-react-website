
import { Introduce } from "./Introduce";
import { LearnMore } from "./LearnMore";

export const Main = () => {
  return (
    <main className="flex flex-col gap-10 justify-evenly text-center items-center">
      <Introduce/>
      <LearnMore/>
    </main>
  );
};
