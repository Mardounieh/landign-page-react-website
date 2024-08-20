export const ForecastingBg = () => {
  return (
    <div
      className="absolute w-full h-full p-2 rounded-xl bg-gradient-to-r from-cyan-500/50 via-sky-500/50 to-violet-600/50 opacity-30 
      [mask:radial-gradient(70%_70%_at_50%,rgba(0,0,0)_35%,rgba(0,0,0,0)_100%)]"
    >
      <svg
        className="scale-150 opacity-60"
        viewBox="0 0 750 400"
        preserveAspectRatio="xMinYMin slice"
      >
        <pattern
          id="diagonalHatch"
          patternUnits="userSpaceOnUse"
          width="4"
          height="8"
          patternTransform="rotate(45 2 2)"
        >
          <path d="M -1,2 l 6,0" stroke="#A3A7B1" stroke-width=".5"></path>
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#diagonalHatch)"
        ></rect>
      </svg>
    </div>
  );
};
