import { Amazon } from "../../SVGs/Apps/Amazon"
import { BankOfAmerica } from "../../SVGs/Apps/BankOfAmerica"
import { ChargeBee } from "../../SVGs/Apps/ChargeBee"
import { Citi } from "../../SVGs/Apps/Citi"
import { Excel } from "../../SVGs/Apps/Excel"
import { HiTech } from "../../SVGs/Apps/HiTech"
import { QuickBook } from "../../SVGs/Apps/QuickBook"
import { Sage } from "../../SVGs/Apps/Sage"
import { Shopify } from "../../SVGs/Apps/Shopify"
import { Slack } from "../../SVGs/Apps/Slack"
import { Square } from "../../SVGs/Apps/Square"
import { Stripe } from "../../SVGs/Apps/Stripe"
import { TdBank } from "../../SVGs/Apps/TdBank"
import { Xero } from "../../SVGs/Apps/Xero"
import { Zoho } from "../../SVGs/Apps/Zoho"
import { IntegrationsCol } from "./IntegrationsCol"

export const IntegrationsHub = (props) => {
  return (
    <div className="relative overflow-hidden rounded-xl flex flex-col gap-2 text-zinc-400/90 ring-1 ring-zinc-800 bg-zinc-900/50">
      <div className="flex gap-10 justify-center [mask:radial-gradient(70%_70%_at_50%,rgba(0,0,0)_35%,rgba(0,0,0,0)_110%)]">
        <IntegrationsCol svg1={<Slack/>} svg2={<Sage/>} svg3={<HiTech/>}/>
        <IntegrationsCol align="justify-end" svg1={<Xero/>} svg2={<BankOfAmerica/>} svg3={<Shopify/>} />
        <IntegrationsCol svg1={<Amazon/>} svg2={<QuickBook/>} svg3={<Stripe/>}/>
        <IntegrationsCol align="justify-end" svg1={<Zoho/>} svg2={<Square/>} svg3={<TdBank/>} />
        <IntegrationsCol svg1={<Citi/>} svg2={<ChargeBee/>} svg3={<Excel/>}/>

      </div>
      <div className="flex flex-col gap-2 bg-zinc-950 p-6 z-50 [mask:linear-gradient(to_bottom,transparent,black_20%)]">
        <h3 className="text-zinc-300 text-lg font-bold">{props.title}</h3>
        <p className="text-md">{props.description}</p>
      </div>
    </div>
  )
}