import { Chart } from "../../SVGs/Chart"
import { WarningMessage } from "./WarningMessage"

export const Forecasting = () => {
  return (
    <div className="w-10/12 p-5 bg-zinc-900 rounded-xl absolute top-[10%] left-[10%]">
      <WarningMessage />
      <Chart />
    </div>
  )
}