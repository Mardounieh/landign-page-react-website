export const SmallSquares = () => {
  return (
    <div className="py-16 absolute w-full top-0 left-0">
      <button className="absolute top-1/4 left-1/3 bg-cyan-600 text-zinc-200 rounded-md p-2 shadow-[0_0_1px_10px_#63f2ff21]">Hey! How can i help you?</button>
      <svg className="h-full w-full opacity-50 [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]" aria-hidden="true">
        <defs>
          <pattern
            id="genius-pattern"
            width="44"
            height="44"
            x="50%"
            y="100%"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#genius-pattern)"
        ></rect>
      </svg>
    </div>
  );
};
