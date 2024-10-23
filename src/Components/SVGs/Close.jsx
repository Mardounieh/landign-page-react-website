export const Close = () => {
  return (
    <div className="w-full flex justify-end">
      <svg
        class="h-5 w-5 rounded text-zinc-200 hover:bg-zinc-800 duration-200 cursor-pointer"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 6.75L6.75 17.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M6.75 6.75L17.25 17.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
};
