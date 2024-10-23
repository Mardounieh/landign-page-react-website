export const Input = (props) => {
  return (
    <div className="flex flex-col gap-2 w-10/12">
      <label htmlFor={props.title} className="text-zinc-400">
        {props.title}
      </label>
      <input
        className="bg-zinc-900 ring-1  ring-zinc-800 rounded-lg py-2 px-4 duration-200 outline-none placeholder-zinc-500 text-zinc-300 caret-cyan-400 focus:shadow-[0px_0px_1px_2px_gray] m-px"
        type="text"
        id={props.title}
        placeholder={props.placeholder}
      />
    </div>
  );
};
