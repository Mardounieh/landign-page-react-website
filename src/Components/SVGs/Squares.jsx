export const Squares = (props) => {
  return (
    <svg
      class={`absolute inset-0 z-10 pointer-events-none h-full w-full stroke-white/10 ${props.mask} ${props.style}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hero"
          width="80"
          height="80"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#hero)"
      ></rect>
    </svg>
  );
};
