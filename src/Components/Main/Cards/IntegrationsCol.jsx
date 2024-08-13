export const IntegrationsCol = (props) => {
  return (
    <div className={`h-72 flex flex-col items-center gap-7 px-6 pt-3 ${props.align}`}>
      <div className="ring-1 ring-zinc-600 p-4 rounded-full duration-200 hover:scale-110 cursor-pointer">{props.svg1}</div>
      <div className="ring-1 ring-zinc-600 p-4 rounded-full duration-200 hover:scale-110 cursor-pointer">{props.svg2}</div>
      <div className="ring-1 ring-zinc-600 p-4 rounded-full duration-200 hover:scale-110 cursor-pointer">{props.svg3}</div>
    </div>
  )
}