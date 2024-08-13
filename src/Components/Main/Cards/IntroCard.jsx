export const IntroCard = (props) => {
  return (
    <div
      className={`w-full ${props.position} ${props.order} overflow-hidden rounded-xl flex flex-col text-zinc-400/90 ring-1 ring-zinc-800`}
    >
      <div className="h-4/6 [mask:linear-gradient(black_40%,transparent)]">
        <div>{props.background}</div>
        <div>{props.tags}</div>
      </div>
      <div className="flex flex-col gap-2 bg-zinc-950 p-6 z-50 [mask:linear-gradient(to_bottom,transparent,black_20%)]">
        <h3 className="text-zinc-300 text-lg font-bold">{props.title}</h3>
        <p className="text-md">{props.description}</p>
      </div>
    </div>
  );
};
