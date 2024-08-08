import { CobaltSvg } from "../SVGs/CobaltSvg";

export const MessageCard1 = () => {
  return (
    <div className="w-[85%] flex flex-col gap-2 pl-2 py-3 bg-zinc-900 rounded-md ring-1 ring-zinc-700 mt-5">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-zinc-950 p-1 rounded-full">
              <CobaltSvg />
            </div>
            Cobalt • 2h ago
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="pl-5 text-sm text-zinc-500">
            <p>💳 Monica is requesting a new card</p>
            <p>Card type: Virtual</p>
            <p>Spend limit: $500 monthly</p>
          </div>
          <div className="pl-5 flex gap-2 items-center text-zinc-100 text-sm">
            <button className="bg-zinc-700 rounded px-1 py-[4px] duration-150 hover:bg-zinc-800">
              Approve
            </button>
            <button className="bg-zinc-700 rounded px-1 py-[4px] duration-150 hover:bg-zinc-800">
              Decline
            </button>
            <button className="bg-zinc-700 rounded px-1 py-[4px] duration-150 hover:bg-zinc-800">
              Edit
            </button>
          </div>
        </div>
      </div>
  )
}