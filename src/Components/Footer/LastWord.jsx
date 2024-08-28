import { WaitListButton } from "../../Utilities/WaitListButton";

export const LastWord = () => {
  return (
    <section className="w-10/12 flex flex-col gap-16 items-center">
      <span className="flex w-full h-[1px] bg-gradient-to-r from-transparent from-30% via-cyan-500 to-transparent to-70% "></span>
      <div className="w-full flex flex-col items-center gap-4">
        <h2 className="w-1/2 pt-5 text-4xl text-center font-bold text-transparent bg-gradient-to-br tracking-tight from-zinc-100 to-zinc-500 bg-clip-text">
          See where financial automation can take your business.
        </h2>
        <p className="text-xl text-zinc-500">
          The first financial tool you'll love. And the last one you'll ever
          need.
        </p>
      </div>
      <WaitListButton />
    </section>
  );
};
