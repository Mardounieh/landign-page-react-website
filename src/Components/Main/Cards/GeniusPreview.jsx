export const GeniusPreview = () => {
  return (
    <div className="p-2 rounded-lg w-10/12 absolute flex justify-between items-center  bottom-[20%] left-[7.5%] bg-zinc-900">
      <div className="w-full flex">
        ✨
        <input type="text" className="w-full bg-transparent outline-none pointer-events-none placeholder:text-red-500" placeholder=" Not available in your region" />
      </div>
      <button className="relative shrink-0 inline-flex text-zinc-100">
        <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-3 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40">Ask Genius</span>
        <span className="absolute left-0 motion-safe:animate-pulse inset-1 bg-gradient-to-r from-pink-600 via-violet-600  to-teal-600 w-full rounded-lg blur-md "></span>
      </button>
    </div>
  );
};
