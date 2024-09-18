import { WaitListButton } from "../../Utilities/WaitListButton";
import { Squares } from "../SVGs/Squares";
import "../../App.css";

export const LastWord = () => {
  return (
    <section className="mt-16 relative w-full flex flex-col gap-16 items-center bg-[radial-gradient(100%_150%_at_50%_-10%,rgb(50,100,135,0.5)_1%,rgba(0,0,0)_30%)]">
      <div className="z-50 backdrop-blur-3xl flex flex-col items-center gap-16 pb-16 w-full">
        <span className="flex w-full h-[1px] bg-gradient-to-r from-transparent from-30% via-cyan-500 to-transparent to-70%"></span>
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="w-5/6 pt-5 text-4xl text-center font-bold text-transparent bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text">
            See where financial automation can take your business.
          </h2>
          <p className="text-xl w-1/2 text-center text-zinc-500 ">
            The first financial tool you'll love. And the last one you'll ever
            need.
          </p>
        </div>
        <div className="pointer-events-none absolute top-0 w-full h-full">
          <Squares mask="[mask-image:radial-gradient(75%_100%_at_top_center,white,transparent)]" />
        </div>
        <WaitListButton />
      </div>
      <div class="absolute top-36 pointer-events-none aspect-video w-9/12 h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-violet-800 opacity-30 shape"></div>
    </section>
  );
};