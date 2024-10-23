import { Warning } from "../../SVGs/Warning";

export const WarningMessage = () => {
  return (
    <div className="flex gap-2 items-center p-2 absolute top-[10%] left-[15%] sm:left-1/4 w-3/4 sm:w-1/2 lg:w-8/12 xl:w-6/12 ring-1 bg-zinc-800 ring-zinc-600 rounded-xl">
      <Warning />
      <div className="flex flex-col text-sm w-10/12">
        <h5 className="text-zinc-300 font-bold">Critical balance alert</h5>
        <p>You will have less than $2,500 in available funds in May</p>
      </div>
    </div>
  );
};
